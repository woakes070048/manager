Template.adminPasswordShow.onCreated(function () {
    var item = new TimelineItem(
        Collection.Passwords,
        this.data.password,
        this.data.password.createdAt,
        'adminPasswordTimelineItem',
        Icon.PASSWORD
    );

    this.timeline = new Timeline(item);
});

Template.adminPasswordShow.helpers({
    headerOptions: function () {
        return {
            title: 'Show password',
            links: [
                {
                    route: Route.PASSWORD_LIST,
                    icon: Icon.PASSWORD,
                    title: 'Passwords'
                },
                {
                    active: true,
                    title: 'Show password'
                }
            ]
        };
    },
    timeline: function () {
        return Template.instance().timeline;
    }
});
