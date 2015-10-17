Template.adminWebsiteShow.onCreated(function () {
    var item = new TimelineItem(
        Collection.Websites,
        this.data.website,
        this.data.website.createdAt,
        'adminWebsiteTimelineItem',
        Icon.WEBSITE
    );

    this.timeline = new Timeline(item);
});

Template.adminWebsiteShow.helpers({
    headerOptions: function () {
        return {
            title: 'Show website',
            links: [
                {
                    route: Route.WEBSITE_LIST,
                    icon: Icon.WEBSITE,
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
