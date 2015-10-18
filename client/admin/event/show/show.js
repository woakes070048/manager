Template.adminEventShow.onCreated(function () {
    var item = new TimelineItem(
        Collection.Events,
        this.data.event,
        this.data.event.createdAt,
        'adminEventTimelineItem',
        Icon.EVENT
    );

    this.timeline = new Timeline(item);
});

Template.adminEventShow.helpers({
    headerOptions: function () {
        return {
            title: 'Show event',
            links: [
                {
                    route: Route.EVENT_LIST,
                    icon: Icon.EVENT,
                    title: 'Events'
                },
                {
                    active: true,
                    title: 'Show event'
                }
            ]
        };
    },
    timeline: function () {
        return Template.instance().timeline;
    }
});
