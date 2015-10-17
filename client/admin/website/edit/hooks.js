AutoForm.addHooks(FormId.ADMIN_WEBSITE_EDIT, {
    onSuccess: function () {
        Router.go(Route.WEBSITE_SHOW, {
            id: this.docId
        });

        Bert.alert({
            title: 'Website edited',
            message: 'Website successfully edited',
            type: 'success'
        });
    }
});
