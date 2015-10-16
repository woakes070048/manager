Template.adminUserList.helpers({
    headerOptions: function () {
        return {
            title: 'Users',
            links: [
                {
                    active: true,
                    icon: 'user',
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
                    route: 'adminUserAdd'
                }
            ]
        };
    },
    selector: function () {
        return {
            roles: {
                $in: [Role.ADMIN]
            }
        };
    }
});
