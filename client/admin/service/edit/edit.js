Template.adminServiceEdit.helpers({
    headerOptions: function () {
        return {
            title: 'Edit service',
            links: [
                {
                    route: Route.SERVICE_LIST,
                    icon: Icon.SERVICE,
                    title: 'Services'
                },
                {
                    current: true,
                    title: 'Edit service'
                }
            ]
        };
    },
    autoformOptions: function () {
        return {
            schema: Schema.ServiceEdit,
            id: FormId.ADMIN_SERVICE_EDIT,
            type: 'method-update',
            meteormethod: 'editService',
            doc: this.service,
            buttonContent: 'Edit service'
        };
    }
});

Template.adminServiceEdit.onRendered(function () {
    Utilities.initializePasswordInputs();
});
