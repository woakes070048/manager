AutoForm.addHooks(FormId.ADMIN_SERVER_ADD, {
    onSuccess: function () {
        Router.go(Route.SERVER_SHOW, {
            id: this.docId
        });

        Bert.alert({
            title: 'Server added',
            message: 'Server successfully added',
            type: 'success'
        });
    }
});
