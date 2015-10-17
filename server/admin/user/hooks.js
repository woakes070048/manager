Meteor.users.before.insert(function (userId, doc) {
    doc.id = getNextId(_.has(doc, 'username') ? 'services' : Meteor.users);
    doc.createdAt = new Date();
});
