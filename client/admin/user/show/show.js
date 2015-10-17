Template.adminUserShow.onCreated(function () {
    var item = new TimelineItem(
        Meteor.users,
        this.data.user,
        this.data.user.createdAt,
        'adminUserTimelineItem',
        Icon.USER
    );

    this.timeline = new Timeline(item);
});

Template.adminUserShow.helpers({
    headerOptions: function () {
        return {
            title: 'Show user',
            links: [
                {
                    route: Route.USER_LIST,
                    icon: Icon.USER,
                    title: 'Users'
                },
                {
                    active: true,
                    title: 'Show user'
                }
            ]
        };
    },
    timeline: function () {
        return Template.instance().timeline;
    }
});
