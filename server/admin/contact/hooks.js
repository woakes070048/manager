Collection.Contacts.before.insert(function (userId, doc) {
    doc.id = getNextId(Collection.Contacts);
    doc.createdAt = new Date();
});
