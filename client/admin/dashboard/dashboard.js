Template.adminDashboard.helpers({
    headerOptions: function () {
        return {
            title: 'Dashboard',
            links: [
                {
                    active: true,
                    icon: Icon.DASHBOARD,
                    title: 'Dashboard'
                }
            ]
        };
    },
    servers: function () {
        return Collection.Servers.find();
    }
});
