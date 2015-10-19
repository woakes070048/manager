Template.adminAccountButtonRemove.events({
    'click #remove': function (event, template) {
        SweetAlert.openRemoveAlert({
            askText: 'This account will be removed.',
            collection: Collection.Accounts,
            id: template.data.id,
            confirmTitle: 'Account removed!',
            confirmText: 'The account has been successfully removed.',
            callback: function () {
                if (_.has(template.data, 'redirect') && template.data.redirect) {
                    Router.go(Route.ACCOUNT_LIST, {
                        id: template.data.id
                    });
                }
            }
        });
    }
});
