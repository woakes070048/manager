Template.adminLogShow.onCreated(function () {
    var item = new TimelineItem(
        Collection.Logs,
        'history',
        this.data.log,
        this.data.log._id,
        this.data.log.message,
        this.data.log.createdAt,
        'adminLogTimelineItem'
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
