Template.adminServiceAdd.helpers({
    headerOptions: function () {
        return {
            title: 'Add new service',
            links: [
                {
                    route: Route.SERVICE_LIST,
                    icon: Icon.SERVICE,
                    title: 'Services'
                },
                {
                    active: true,
                    title: 'Add new service'
                }
            ]
        };
    },
    autoformOptions: function () {
        return {
            schema: Schema.ServiceAdd,
            id: FormId.ADMIN_SERVICE_ADD,
            type: 'method',
            meteormethod: 'addService',
            buttonContent: 'Add service'
        };
    }
});

Template.adminServiceAdd.onRendered(function () {
    Utilities.initializePasswordInputs();
});
