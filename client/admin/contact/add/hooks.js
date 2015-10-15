AutoForm.addHooks(FormId.ADMIN_CONTACT_ADD, {
    onSuccess: function () {
        Router.go('adminContactShow', {
            id: this.docId
        });

        swal({
            title: 'Contact added',
            text: 'Contact successfully added',
            type: 'success'
        });
    }
});
