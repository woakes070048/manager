Template.adminUserList.helpers({
    headerOptions: function () {
        return {
            title: 'Users',
            links: [
                {
                    active: true,
                    icon: Icon.USER,
                    title: 'Users'
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
                    title: 'Add new user',
                    route: Route.USER_ADD
                }
            ]
        };
    }
});
