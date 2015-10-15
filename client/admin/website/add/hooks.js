AutoForm.addHooks(FormId.ADMIN_WEBSITE_ADD, {
    onSuccess: function () {
        Router.go('adminWebsiteShow', {
            id: this.docId
        });

        swal({
            title: 'Website added',
            text: 'Website successfully added',
            type: 'success'
        });
    }
});
