Collection.Servers.before.insert(function (userId, doc) {
    doc.id = getNextId(Collection.Servers);
    doc.createdAt = new Date();

    var fields = ['appKey', 'appSecret', 'consumerKey'];

    _.each(fields, function (field) {
        doc[field] = Crypto.encrypt(doc[field]);
    });
});

Collection.Servers.before.update(function (userId, doc, fieldNames, modifier) {
    modifier.$set = modifier.$set || {};

    var fields = ['appKey', 'appSecret', 'consumerKey'];

    _.each(fields, function (field) {
        if (_.has(modifier.$set, field)) {
            modifier.$set[field] = Crypto.encrypt(modifier.$set[field]);
        }
    });
});