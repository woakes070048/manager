AutoForm.addHooks(FormId.ADMIN_CONTACT_ADD, {
    onSuccess: function () {
        Router.go('adminContactShow', {
            id: this.docId
        });

        Bert.alert({
            title: 'Contact added',
            message: 'Contact successfully added',
            type: 'success'
        });
    }
});
