SecurityMethod = {
    isService: function (doc) {
        return Roles.userIsInRole(doc._id, Role.SERVICE);
    },
    isUser: function (doc) {
        return !SecurityMethod.isService(doc);
    },
    isFirst: function (doc) {
        return doc.id === 1;
    },
    isLastUser: function () {
        return Meteor.users.find(Selector.getIsUserSelector()).count() === 1;
    }
};
