Template.adminPasswordButtonRemove.events({
    'click #remove': function (event, template) {
        SweetAlert.openRemoveAlert({
            askText: 'This password will be removed.',
            collection: Collection.Passwords,
            id: template.data.id,
            confirmTitle: 'Password removed!',
            confirmText: 'The password has been successfully removed.',
            callback: function () {
                if (_.has(template.data, 'redirect') && template.data.redirect) {
                    Router.go(Route.PASSWORD_LIST, {
                        id: template.data.id
                    });
                }
            }
        });
    }
});
