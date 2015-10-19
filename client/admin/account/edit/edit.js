Template.adminAccountEdit.helpers({
    headerOptions: function () {
        return {
            title: 'Edit account',
            links: [
                {
                    route: Route.ACCOUNT_LIST,
                    icon: Icon.ACCOUNT,
                    title: 'Accounts'
                },
                {
                    active: true,
                    title: 'Edit account'
                }
            ]
        };
    },
    autoformOptions: function () {
        return {
            collection: Collection.Accounts,
            schema: Schema.Account,
            id: FormId.ADMIN_ACCOUNT_EDIT,
            type: 'update',
            doc: this.account,
            buttonContent: 'Edit account'
        };
    }
});
