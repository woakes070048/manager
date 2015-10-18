Template.adminPasswordEdit.helpers({
    headerOptions: function () {
        return {
            title: 'Edit password',
            links: [
                {
                    route: Route.PASSWORD_LIST,
                    icon: Icon.PASSWORD,
                    title: 'Passwords'
                },
                {
                    active: true,
                    title: 'Edit password'
                }
            ]
        };
    },
    autoformOptions: function () {
        return {
            collection: Collection.Passwords,
            schema: Schema.Password,
            id: FormId.ADMIN_PASSWORD_EDIT,
            type: 'update',
            doc: this.password,
            buttonContent: 'Edit password'
        };
    }
});

Template.adminPasswordEdit.onRendered(function () {
    Utilities.initializePasswordInputs();
});
