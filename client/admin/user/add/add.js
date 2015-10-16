Template.adminUserAdd.helpers({
    headerOptions: function () {
        return {
            title: 'Add new user',
            links: [
                {
                    route: 'adminUserList',
                    icon: 'user',
                    title: 'Users'
                },
                {
                    current: true,
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
