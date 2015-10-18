AutoForm.addHooks(FormId.ADMIN_SERVER_EDIT, {
    onSuccess: function () {
        Router.go(Route.SERVER_SHOW, {
            id: this.docId
        });

        Bert.alert({
            title: 'Server edited',
            message: 'Server successfully edited',
            type: 'success'
        });
    }
});
