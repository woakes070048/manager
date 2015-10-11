var options = {
    fields: {
        username: 1,
        'profile.backgroundColor': 1
    }
};

Meteor.publish('adminServicesLabel', function () {
    if (!Roles.userIsInRole(this.userId, Role.ADMIN)) {
        return [];
    }

    // Services
    return Meteor.users.find({
        roles: {
            $in: [Role.SERVICE]
        }
    }, options);
});

Meteor.publish('adminServiceLabel', function (logId) {
    if (!Roles.userIsInRole(this.userId, Role.ADMIN)) {
        return [];
    }

    var log = Collection.Logs.findOne(logId);

    if (!log) {
        return [];
    }

    // Service
    return Meteor.users.find({
        _id: log.service
    }, options);
});
