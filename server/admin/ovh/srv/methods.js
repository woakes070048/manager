var Future = Meteor.npmRequire('fibers/future');

Meteor.methods({
    adminServerChart: function (id) {
        checkAuthorization();

        // Find server
        var server = Collection.Servers.findOne(id);

        if (!server) {
            throw new Meteor.Error('bad-request');
        }

        // Decrypt
        var fields = ['appKey', 'appSecret', 'consumerKey'];

        _.each(fields, function (field) {
            server[field] = Crypto.decrypt(server[field]);
        });

        // OVH API
        var ovh = Meteor.npmRequire('ovh')({
            endpoint: server.endpoint.toLowerCase().replace('_', '-'),
            appKey: server.appKey,
            appSecret: server.appSecret,
            consumerKey: server.consumerKey
        });

        // Request data
        var types = ['cpu', 'mem'];
        var result = {};

        _.each(types, function (type) {
            var future = new Future();

            try {
                ovh.request('GET', '/vps/{serviceName}/monitoring', {
                    serviceName: server.serviceName,
                    period: 'today',
                    type: type + ':used'
                }, function (error, result) {
                    if (error) {
                        future.throw(error);
                    } else {
                        future.return(result);
                    }
                });

                result[type] = future.wait();
            } catch (error) {
                console.log(error);
                throw new Meteor.Error('bad-request');
            }
        });

        return result;
    }
});
