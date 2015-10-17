Template.adminServiceButtonRemove.events({
    'click #remove': function (event, template) {
        SweetAlert.openRemoveAlert({
            askText: 'This service will be removed.',
            collection: Meteor.users,
            id: template.data.id,
            confirmTitle: 'Service removed!',
            confirmText: 'The service has been successfully removed.',
            callback: function () {
                if (_.has(template.data, 'redirect') && template.data.redirect) {
                    Router.go(Route.SERVICE_LIST, {
                        id: template.data.id
                    });
                }
            }
        });
    }
});
