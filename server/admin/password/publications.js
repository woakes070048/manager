function transform (doc) {
    doc.password = Crypto.decrypt(doc.password);

    return doc;
}

Meteor.publish('adminPasswordData', function (id) {
    if (!Roles.userIsInRole(this.userId, Role.ADMIN)) {
        return [];
    }

    var password = Collection.Passwords.findOne(id);

    if (!password) {
        return [];
    }

    this.added(Collection.Passwords._name, id, transform(password));
    this.ready();
});
