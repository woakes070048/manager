Collection.Passwords.before.insert(function (userId, doc) {
    doc.id = getNextId(Collection.Passwords);
    doc.createdAt = new Date();
    doc.password = Crypto.encrypt(doc.password);
});

Collection.Passwords.before.update(function (userId, doc, fieldNames, modifier) {
    modifier.$set = modifier.$set || {};

    if (_.has(modifier.$set, 'password')) {
        modifier.$set.password = Crypto.encrypt(modifier.$set.password);
    }
});