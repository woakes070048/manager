Template.adminWebsiteShow.onCreated(function () {
    var item = new TimelineItem(
        Collection.Websites,
        'globe',
        this.data.website,
        this.data.website.createdAt,
        'adminWebsiteTimelineItem'
    );

    this.timeline = new Timeline(item);
});

Template.adminWebsiteShow.helpers({
    headerOptions: function () {
        return {
            title: 'Show website',
            links: [
                {
                    route: 'adminWebsiteList',
                    icon: 'globe',
                    title: 'Websites'
                },
                {
                    active: true,
                    title: 'Show website'
                }
            ]
        };
    },
    timeline: function () {
        return Template.instance().timeline;
    }
});