Template.adminServerList.helpers({
    headerOptions: function () {
        return {
            title: 'Servers',
            links: [
                {
                    active: true,
                    icon: Icon.SERVER,
                    title: 'Servers'
                }
            ]
        };
    },
    actionsOptions: function () {
        return {
            links: [
                {
                    type: 'primary',
                    icon: 'plus',
                    title: 'Add new server',
                    route: Route.SERVER_ADD
                }
            ]
        };
    }
});
