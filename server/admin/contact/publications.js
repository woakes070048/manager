Meteor.publish('adminContactData', function (id) {
    if (!Roles.userIsInRole(this.userId, Role.ADMIN)) {
        return [];
    }

    return Collection.Contacts.find({
        _id: id
    });
});
