AutoForm.addHooks(FormId.ADMIN_EVENT_EDIT, {
    onSuccess: function () {
        Router.go(Route.EVENT_SHOW, {
            id: this.docId
        });

        Bert.alert({
            title: 'Event edited',
            message: 'Event successfully edited',
            type: 'success'
        });
    }
});
