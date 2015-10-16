AutoForm.addHooks(FormId.ADMIN_CONTACT_EDIT, {
    onSuccess: function () {
        Router.go('adminContactShow', {
            id: this.docId
        });

        Bert.alert({
            title: 'Contact edited',
            message: 'Contact successfully edited',
            type: 'success'
        });
    }
});
