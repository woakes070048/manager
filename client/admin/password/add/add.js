Template.adminPasswordAdd.helpers({
    headerOptions: function () {
        return {
            title: 'Add new password',
            links: [
                {
                    route: Route.PASSWORD_LIST,
                    icon: Icon.PASSWORD,
                    title: 'Passwords'
                },
                {
                    active: true,
                    title: 'Add new password'
                }
            ]
        };
    },
    autoformOptions: function () {
        return {
            collection: Collection.Passwords,
            schema: Schema.Password,
            id: FormId.ADMIN_PASSWORD_ADD,
            type: 'insert',
            buttonContent: 'Add password'
        };
    }
});

Template.adminPasswordAdd.onRendered(function () {
    Utilities.initializePasswordInputs();
});
