Template.adminUserAdd.helpers({
    headerOptions: function () {
        return {
            title: 'Add new user',
            links: [
                {
                    route: Route.USER_LIST,
                    icon: Icon.USER,
                    title: 'Users'
                },
                {
                    active: true,
                    title: 'Add new user'
                }
            ]
        };
    },
    autoformOptions: function () {
        return {
            schema: Schema.UserAdd,
            id: FormId.ADMIN_USER_ADD,
            type: 'method',
            meteormethod: 'addUser',
            buttonContent: 'Add user'
        };
    }
});

Template.adminUserAdd.onRendered(function () {
    Utilities.initializePasswordInputs();
});
