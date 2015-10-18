Collection.Events.before.insert(function (userId, doc) {
    doc.id = getNextId(Collection.Events);
    doc.createdAt = new Date();
});
