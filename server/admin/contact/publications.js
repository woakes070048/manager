Meteor.publish('adminContactData', function (id) {
    if (!Roles.userIsInRole(this.userId, Role.ADMIN)) {
        return [];
    }

    return Collection.Contacts.find({
        _id: id
    });
});

Meteor.publish('adminContactsSelect', function (ids) {
    if (!Roles.userIsInRole(this.userId, Role.ADMIN)) {
        return [];
    }

    var selector = ids !== undefined
        ? { _id: { $in: ids } }
        : {};

    return Collection.Contacts.find(selector, {
        fields: {
            firstName: 1,
            lastName: 1
        }
    });
});
