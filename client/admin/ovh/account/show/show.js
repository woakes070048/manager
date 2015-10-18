Template.adminAccountShow.onCreated(function () {
    var item = new TimelineItem(
        Collection.Accounts,
        this.data.account,
        this.data.account.createdAt,
        'adminAccountTimelineItem',
        Icon.USER
    );

    this.timeline = new Timeline(item);
});

Template.adminAccountShow.helpers({
    headerOptions: function () {
        return {
            title: 'Show account',
            links: [
                {
                    route: Route.ACCOUNT_LIST,
                    icon: Icon.ACCOUNT,
                    title: 'Accounts'
                },
                {
                    active: true,
                    title: 'Show account'
                }
            ]
        };
    },
    timeline: function () {
        return Template.instance().timeline;
    }
});
