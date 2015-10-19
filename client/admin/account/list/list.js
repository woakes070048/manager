Template.adminAccountList.helpers({
    headerOptions: function () {
        return {
            title: 'Accounts',
            links: [
                {
                    active: true,
                    icon: Icon.ACCOUNT,
                    title: 'Accounts'
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
                    title: 'Add new account',
                    route: Route.ACCOUNT_ADD
                }
            ]
        };
    }
});
