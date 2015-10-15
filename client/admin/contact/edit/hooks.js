AutoForm.addHooks(FormId.ADMIN_CONTACT_EDIT, {
    onSuccess: function () {
        Router.go('adminContactShow', {
            id: this.docId
        });

        swal({
            title: 'Contact edited',
            text: 'Contact successfully edited',
            type: 'success'
        });
    }
});
