Template.componentNotFoundContent.helpers({
    headerOptions: function () {
        return {
            title: 'Page not found',
            links: [
                {
                    icon: 'tachometer',
                    title: 'Dashboard',
                    route: 'adminDashboard'
                }, {
                    active: true,
                    title: 'Page not found'
                }
            ]
        };
    }
});
