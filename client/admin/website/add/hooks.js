AutoForm.addHooks(FormId.ADMIN_WEBSITE_ADD, {
    onSuccess: function () {
        Router.go('adminWebsiteShow', {
            id: this.docId
        });

        Bert.alert({
            title: 'Website added',
            message: 'Website successfully added',
            type: 'success'
        });
    }
});
