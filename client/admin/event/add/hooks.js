AutoForm.addHooks(FormId.ADMIN_EVENT_ADD, {
    onSuccess: function () {
        Router.go(Route.EVENT_SHOW, {
            id: this.docId
        });

        Bert.alert({
            title: 'Event added',
            message: 'Event successfully added',
            type: 'success'
        });
    }
});
