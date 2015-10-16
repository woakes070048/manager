AutoForm.addHooks(FormId.ADMIN_USER_ADD, {
    onSuccess: function (formType, docId) {
        Router.go('adminUserShow', {
            id: docId
        });

        swal({
            title: 'User added',
            text: 'User successfully added',
            type: 'success'
        });
    }
});
