Template.adminEventButtonRemove.events({
    'click #remove': function (event, template) {
        SweetAlert.openRemoveAlert({
            askText: 'This event will be removed.',
            collection: Collection.Events,
            id: template.data.id,
            confirmTitle: 'Event removed!',
            confirmText: 'The event has been successfully removed.',
            callback: function () {
                if (_.has(template.data, 'redirect') && template.data.redirect) {
                    Router.go(Route.EVENT_LIST, {
                        id: template.data.id
                    });
                }
            }
        });
    }
});
