Template.adminUserEdit.helpers({
    headerOptions: function () {
        return {
            title: 'Edit user',
            links: [
                {
                    route: Route.USER_LIST,
                    icon: Icon.USER,
                    title: 'Users'
                },
                {
                    current: true,
                    title: 'Edit user'
                }
            ]
        };
    },
    autoformOptions: function () {
        return {
            schema: Schema.UserEdit,
            id: FormId.ADMIN_USER_EDIT,
            type: 'method-update',
            meteormethod: 'editUser',
            doc: this.user,
            buttonContent: 'Edit user'
        };
    }
});

Template.adminUserEdit.onRendered(function () {
    Utilities.initializePasswordInputs();
});
