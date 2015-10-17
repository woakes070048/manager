Template.adminServerShow.onCreated(function () {
    var item = new TimelineItem(
        Collection.Servers,
        this.data.server,
        this.data.server.createdAt,
        'adminServerTimelineItem',
        Icon.SERVER
    );

    this.timeline = new Timeline(item);
});

Template.adminServerShow.helpers({
    headerOptions: function () {
        return {
            title: 'Show server',
            links: [
                {
                    route: Route.SERVER_LIST,
                    icon: Icon.SERVER,
                    title: 'Servers'
                },
                {
                    active: true,
                    title: 'Show server'
                }
            ]
        };
    },
    timeline: function () {
        return Template.instance().timeline;
    }
});
