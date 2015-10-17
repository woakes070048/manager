function transform (doc) {
    doc.appKey      = Crypto.decrypt(doc.appKey);
    doc.appSecret   = Crypto.decrypt(doc.appSecret);
    doc.consumerKey = Crypto.decrypt(doc.consumerKey);

    return doc;
}

Meteor.publish('adminServerData', function (id) {
    if (!Roles.userIsInRole(this.userId, Role.ADMIN)) {
        return [];
    }

    var server = Collection.Servers.findOne(id);

    if (!server) {
        return [];
    }

    this.added(Collection.Servers._name, id, transform(server));
    this.ready();
});
