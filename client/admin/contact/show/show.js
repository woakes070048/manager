Template.adminContactShow.onCreated(function () {
    var item = new TimelineItem(
        Collection.Contacts,
        this.data.contact,
        this.data.contact.createdAt,
        'adminContactTimelineItem',
        'user'
    );

    this.timeline = new Timeline(item);
});

Template.adminContactShow.helpers({
    headerOptions: function () {
        return {
            title: 'Show contact',
            links: [
                {
                    route: 'adminContactList',
                    icon: 'suitcase',
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
