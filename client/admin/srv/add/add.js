Template.adminServerAdd.helpers({
    headerOptions: function () {
        return {
            title: 'Add new server',
            links: [
                {
                    route: Route.SERVER_LIST,
                    icon: Icon.SERVER,
                    title: 'Servers'
                },
                {
                    active: true,
                    title: 'Add new server'
                }
            ]
        };
    },
    autoformOptions: function () {
        return {
            collection: Collection.Servers,
            schema: Schema.Server,
            id: FormId.ADMIN_SERVER_ADD,
            type: 'insert',
            buttonContent: 'Add server'
        };
    }
});

Template.adminServerAdd.onRendered(function () {
    Utilities.initializePasswordInputs();
});
