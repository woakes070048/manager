AutoForm.addHooks(FormId.ADMIN_PASSWORD_ADD, {
    onSuccess: function () {
        Router.go(Route.PASSWORD_SHOW, {
            id: this.docId
        });

        Bert.alert({
            title: 'Password added',
            message: 'Password successfully added',
            type: 'success'
        });
    }
});
