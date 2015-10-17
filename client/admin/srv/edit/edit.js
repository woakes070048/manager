Template.adminServerEdit.helpers({
    headerOptions: function () {
        return {
            title: 'Edit server',
            links: [
                {
                    route: Route.SERVER_LIST,
                    icon: Icon.SERVER,
                    title: 'Servers'
                },
                {
                    current: true,
                    title: 'Edit server'
                }
            ]
        };
    },
    autoformOptions: function () {
        return {
            collection: Collection.Servers,
            schema: Schema.Server,
            id: FormId.ADMIN_SERVER_EDIT,
            type: 'update',
            doc: this.server,
            buttonContent: 'Edit server'
        };
    }
});

Template.adminServerEdit.onRendered(function () {
    Utilities.initializePasswordInputs();
});
