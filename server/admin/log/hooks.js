Collection.Logs.before.insert(function (userId, doc) {
    doc.id = getNextId(Collection.Logs);
    doc.createdAt = new Date();
});
