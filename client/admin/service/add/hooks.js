AutoForm.addHooks(FormId.ADMIN_SERVICE_ADD, {
    onSuccess: function (formType, docId) {
        Router.go(Route.SERVICE_SHOW, {
            id: docId
        });

        Bert.alert({
            title: 'Service added',
            message: 'Service successfully added',
            type: 'success'
        });
    }
});
