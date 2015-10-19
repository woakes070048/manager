Collection.Websites.before.insert(function (userId, doc) {
    doc.id = getNextId(Collection.Websites);
    doc.createdAt = new Date();
});
