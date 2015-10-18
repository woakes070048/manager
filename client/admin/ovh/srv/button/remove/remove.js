Template.adminServerButtonRemove.events({
    'click #remove': function (event, template) {
        SweetAlert.openRemoveAlert({
            askText: 'This server will be removed.',
            collection: Collection.Servers,
            id: template.data.id,
            confirmTitle: 'Server removed!',
            confirmText: 'The server has been successfully removed.',
            callback: function () {
                if (_.has(template.data, 'redirect') && template.data.redirect) {
                    Router.go(Route.SERVER_LIST, {
                        id: template.data.id
                    });
                }
            }
        });
    }
});
