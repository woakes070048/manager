Meteor.publish('adminAccountData', function (id) {
    if (!Roles.userIsInRole(this.userId, Role.ADMIN)) {
        return [];
    }

    return Collection.Accounts.find({
        _id: id
    });
});
