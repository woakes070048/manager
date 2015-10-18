AutoForm.addHooks(FormId.ADMIN_ACCOUNT_ADD, {
    onSuccess: function () {
        Router.go(Route.ACCOUNT_SHOW, {
            id: this.docId
        });

        Bert.alert({
            title: 'Account added',
            message: 'Account successfully added',
            type: 'success'
        });
    }
});
