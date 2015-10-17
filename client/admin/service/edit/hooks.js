AutoForm.addHooks(FormId.ADMIN_SERVICE_EDIT, {
    docToForm: function (doc) {
        return {
            name: doc.username,
            textColor: doc.profile.textColor,
            backgroundColor: doc.profile.backgroundColor
        };
    },
    onSuccess: function () {
        Router.go(Route.SERVICE_SHOW, {
            id: this.docId
        });

        Bert.alert({
            title: 'Service edited',
            message: 'Service successfully edited',
            type: 'success'
        });
    }
});
