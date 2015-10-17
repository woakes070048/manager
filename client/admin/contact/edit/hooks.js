AutoForm.addHooks(FormId.ADMIN_CONTACT_EDIT, {
    onSuccess: function () {
        Router.go(Route.CONTACT_SHOW, {
            id: this.docId
        });

        Bert.alert({
            title: 'Contact edited',
            message: 'Contact successfully edited',
            type: 'success'
        });
    }
});
