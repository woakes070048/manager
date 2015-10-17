Collection.Servers.before.insert(function (userId, doc) {
    doc.id = getNextId(Collection.Servers);
    doc.createdAt = new Date();

    doc.appKey      = Crypto.encrypt(doc.appKey);
    doc.appSecret   = Crypto.encrypt(doc.appSecret);
    doc.consumerKey = Crypto.encrypt(doc.consumerKey);
});
