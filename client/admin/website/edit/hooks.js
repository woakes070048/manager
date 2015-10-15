AutoForm.addHooks(FormId.ADMIN_WEBSITE_EDIT, {
    onSuccess: function () {
        Router.go('adminWebsiteShow', {
            id: this.docId
        });

        swal({
            title: 'Website edited',
            text: 'Website successfully edited',
            type: 'success'
        });
    }
});
