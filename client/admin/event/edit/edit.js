Template.adminEventEdit.helpers({
    headerOptions: function () {
        return {
            title: 'Edit event',
            links: [
                {
                    route: Route.EVENT_LIST,
                    icon: Icon.EVENT,
                    title: 'Events'
                },
                {
                    active: true,
                    title: 'Edit event'
                }
            ]
        };
    },
    autoformOptions: function () {
        return {
            collection: Collection.Events,
            schema: Schema.Event,
            id: FormId.ADMIN_EVENT_EDIT,
            type: 'update',
            doc: this.event,
            buttonContent: 'Edit event'
        };
    }
});
