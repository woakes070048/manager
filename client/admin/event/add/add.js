Template.adminEventAdd.helpers({
    headerOptions: function () {
        return {
            title: 'Add new event',
            links: [
                {
                    route: Route.EVENT_LIST,
                    icon: Icon.EVENT,
                    title: 'Events'
                },
                {
                    active: true,
                    title: 'Add new event'
                }
            ]
        };
    },
    autoformOptions: function () {
        return {
            collection: Collection.Events,
            schema: Schema.Event,
            id: FormId.ADMIN_EVENT_ADD,
            type: 'insert',
            buttonContent: 'Add event'
        };
    }
});
