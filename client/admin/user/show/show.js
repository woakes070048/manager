Template.adminUserShow.onCreated(function () {
    var item = new TimelineItem(
        Meteor.users,
        this.data.user,
        this.data.user.createdAt,
        'adminUserTimelineItem',
        'user'
    );

    this.timeline = new Timeline(item);
});

Template.adminUserShow.helpers({
    headerOptions: function () {
        return {
            title: 'Show user',
            links: [
                {
                    route: 'adminUserList',
                    icon: 'user',
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
