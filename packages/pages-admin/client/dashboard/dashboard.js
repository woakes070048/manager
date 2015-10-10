Template.adminDashboard.helpers({
    headerOptions: function () {
        return {
            title: 'Dashboard',
            links: [
                {
                    active: true,
                    icon: 'tachometer',
                    title: 'Dashboard',
                    route: 'adminDashboard'
                }
            ]
        };
    }
});
