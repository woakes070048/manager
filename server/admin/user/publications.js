Meteor.publish('adminUserData', function (id) {
    if (!Roles.userIsInRole(this.userId, Role.ADMIN)) {
        return [];
    }

    return Meteor.users.find({
        _id: id
    });
});
