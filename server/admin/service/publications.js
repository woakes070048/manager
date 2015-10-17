var options = {
    fields: {
        username: 1,
        'profile.textColor': 1,
        'profile.backgroundColor': 1
    }
};

Meteor.publish('adminServiceLabel', function (id) {
    if (!Roles.userIsInRole(this.userId, Role.ADMIN)) {
        return [];
    }

    // Service
    return Meteor.users.find({
        _id: id
    }, options);
});

Meteor.publish('adminServiceData', function (id) {
    if (!Roles.userIsInRole(this.userId, Role.ADMIN)) {
        return [];
    }

    return Meteor.users.find({
        _id: id
    });
});
