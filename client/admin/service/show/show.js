Template.adminServiceShow.onCreated(function () {
    var item = new TimelineItem(
        Meteor.users,
        this.data.service,
        this.data.service.createdAt,
        'adminServiceTimelineItem',
        Icon.SERVICE
    );

    this.timeline = new Timeline(item);
});

Template.adminServiceShow.helpers({
    headerOptions: function () {
        return {
            title: 'Show service',
            links: [
                {
                    route: Route.SERVICE_LIST,
                    icon: Icon.SERVICE,
                    title: 'Services'
                },
                {
                    active: true,
                    title: 'Show service'
                }
            ]
        };
    },
    timeline: function () {
        return Template.instance().timeline;
    }
});
