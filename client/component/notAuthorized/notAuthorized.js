Template.componentNotAuthorized.helpers({
    headerOptions: function () {
        return {
            title: 'Not authorized',
            links: [
                {
                    icon: Icon.DASHBOARD,
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

Template.componentNotAuthorized.onRendered(function () {
    BodyClass.add('no-sidebar');
});
