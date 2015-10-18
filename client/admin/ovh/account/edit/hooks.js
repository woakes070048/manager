AutoForm.addHooks(FormId.ADMIN_ACCOUNT_EDIT, {
    onSuccess: function () {
        Router.go(Route.ACCOUNT_SHOW, {
            id: this.docId
        });

        Bert.alert({
            title: 'Account edited',
            message: 'Account successfully edited',
            type: 'success'
        });
    }
});
