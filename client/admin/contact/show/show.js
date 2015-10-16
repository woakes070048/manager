Template.adminContactShow.onCreated(function () {
    this.timeline = new Timeline(item);

    var item = new TimelineItem(
        Collection.Contacts,
        this.data.contact,
        this.data.contact.createdAt,
        'adminContactTimelineItem',
        'user'
    );
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
