AutoForm.addHooks(FormId.ADMIN_USER_EDIT, {
    docToForm: function (doc) {
        return {
            firstName: doc.profile.firstName,
            lastName: doc.profile.lastName,
            email: doc.emails[0].address,
            phone: doc.profile.phone,
            roles: doc.roles
        };
    },
    onSuccess: function () {
        Router.go(Route.USER_SHOW, {
            id: this.docId
        });

        Bert.alert({
            title: 'User edited',
            message: 'User successfully edited',
            type: 'success'
        });
    }
});
