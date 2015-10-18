Meteor.publish('adminEventList', function () {
    if (!Roles.userIsInRole(this.userId, Role.ADMIN)) {
        return [];
    }

    return Collection.Events.find({}, {
        fields: {
            id: 1,
            title: 1,
            allDay: 1,
            start: 1,
            end: 1,
            backgroundColor: 1,
            borderColor: 1,
            textColor: 1
        }
    });
});

Meteor.publish('adminEventData', function (id) {
    if (!Roles.userIsInRole(this.userId, Role.ADMIN)) {
        return [];
    }

    return Collection.Events.find({
        _id: id
    });
});
