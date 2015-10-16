Meteor.users.before.insert(function (userId, doc) {
    doc.id = getNextId(Meteor.users);
    doc.createdAt = new Date();
});
