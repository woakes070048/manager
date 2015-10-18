Template.adminPasswordList.helpers({
    headerOptions: function () {
        return {
            title: 'Passwords',
            links: [
                {
                    active: true,
                    icon: Icon.PASSWORD,
                    title: 'Passwords'
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
                    title: 'Add new password',
                    route: Route.PASSWORD_ADD
                }
            ]
        };
    }
});
