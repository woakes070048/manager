Template.componentNotAuthorizedContent.helpers({
    headerOptions: function () {
        return {
            title: 'Not authorized',
            links: [
                {
                    icon: 'tachometer',
                    title: 'Dashboard',
                    route: 'adminDashboard'
                }, {
                    active: true,
                    title: 'Not authorized'
                }
            ]
        };
    }
});
