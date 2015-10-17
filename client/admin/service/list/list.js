Template.adminServiceList.helpers({
    headerOptions: function () {
        return {
            title: 'Services',
            links: [
                {
                    active: true,
                    icon: Icon.SERVICE,
                    title: 'Services'
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
                    title: 'Add new service',
                    route: Route.SERVICE_ADD
                }
            ]
        };
    }
});
