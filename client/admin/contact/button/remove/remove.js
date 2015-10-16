Template.adminContactButtonRemove.events({
    'click #remove': function (event, template) {
        SweetAlert.openRemoveAlert({
            askText: 'This contact will be removed.',
            collection: Collection.Contacts,
            id: template.data.id,
            confirmTitle: 'Contact removed!',
            confirmText: 'The contact has been successfully removed.',
            callback: function () {
                if (_.has(template.data, 'redirect') && template.data.redirect) {
                    Router.go('adminContactList', {
                        id: template.data.id
                    });
                }
            }
        });
    }
});
