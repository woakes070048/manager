Meteor.publish('adminLogShow', function (id) {
    if (!Roles.userIsInRole(this.userId, Role.ADMIN)) {
        return [];
    }

    return Collection.Logs.find({
        _id: id
    });
});
