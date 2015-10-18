AutoForm.addHooks(FormId.ADMIN_PASSWORD_EDIT, {
    onSuccess: function () {
        Router.go(Route.PASSWORD_SHOW, {
            id: this.docId
        });

        Bert.alert({
            title: 'Password edited',
            message: 'Password successfully edited',
            type: 'success'
        });
    }
});
