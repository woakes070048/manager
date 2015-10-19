Collection.Accounts.before.insert(function (userId, doc) {
    doc.id = getNextId(Collection.Accounts);
    doc.createdAt = new Date();
});
