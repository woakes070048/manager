Template.adminLogShow.onCreated(function () {
    var item = new TimelineItem(
        Collection.Logs,
        this.data.log,
        this.data.log.createdAt,
        'adminLogTimelineItem',
        'history'
    );

    this.timeline = new Timeline(item);
});

Template.adminLogShow.helpers({
    headerOptions: function () {
        return {
            title: 'Show log',
            links: [
                {
                    route: 'adminLogList',
                    icon: 'history',
                    title: 'Logs'
                },
                {
                    active: true,
                    title: 'Show log'
                }
            ]
        };
    },
    timeline: function () {
        return Template.instance().timeline;
    }
});
