Template.adminWebsiteButtonRemove.events({
    'click #remove': function (event, template) {
        SweetAlert.openRemoveAlert({
            askText: 'This website will be removed.',
            collection: Collection.Websites,
            id: template.data.id,
            confirmTitle: 'Website removed!',
            confirmText: 'The website has been successfully removed.',
            callback: function () {
                if (_.has(template.data, 'redirect') && template.data.redirect) {
                    Router.go('adminWebsiteList', {
                        id: template.data.id
                    });
                }
            }
        });
    }
});
