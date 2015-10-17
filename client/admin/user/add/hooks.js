AutoForm.addHooks(FormId.ADMIN_USER_ADD, {
    onSuccess: function (formType, docId) {
        Router.go(Route.USER_SHOW, {
            id: docId
        });

        Bert.alert({
            title: 'User added',
            message: 'User successfully added',
            type: 'success'
        });
    }
});
