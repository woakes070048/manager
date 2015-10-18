Template.adminAccountAdd.helpers({
    headerOptions: function () {
        return {
            title: 'Add new account',
            links: [
                {
                    route: Route.ACCOUNT_LIST,
                    icon: Icon.ACCOUNT,
                    title: 'Accounts'
                },
                {
                    active: true,
                    title: 'Add new account'
                }
            ]
        };
    },
    autoformOptions: function () {
        return {
            collection: Collection.Accounts,
            schema: Schema.Account,
            id: FormId.ADMIN_ACCOUNT_ADD,
            type: 'insert',
            buttonContent: 'Add account'
        };
    }
});
