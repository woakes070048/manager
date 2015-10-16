Template.adminUserButtonRemove.events({
    'click #remove': function (event, template) {
        SweetAlert.openRemoveAlert({
            askText: 'This user will be removed.',
            collection: Meteor.users,
            id: template.data.id,
            confirmTitle: 'User removed!',
            confirmText: 'The user has been successfully removed.',
            callback: function () {
                if (_.has(template.data, 'redirect') && template.data.redirect) {
                    Router.go('adminUserList', {
                        id: template.data.id
                    });
                }
            }
        });
    }
});
