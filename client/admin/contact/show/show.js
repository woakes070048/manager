Template.adminContactShow.onCreated(function () {
    var item = new TimelineItem(
        Collection.Contacts,
        this.data.contact,
        this.data.contact.createdAt,
        'adminContactTimelineItem',
        Icon.USER
    );

    this.timeline = new Timeline(item);
});

Template.adminContactShow.helpers({
    headerOptions: function () {
        return {
            title: 'Show contact',
            links: [
                {
                    route: Route.CONTACT_LIST,
                    icon: Icon.CONTACT,
                    title: 'Contacts'
                },
                {
                    active: true,
                    title: 'Show contact'
                }
            ]
        };
    },
    timeline: function () {
        return Template.instance().timeline;
    }
});
