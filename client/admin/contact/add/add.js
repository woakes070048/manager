Template.adminContactAdd.helpers({
    headerOptions: function () {
        return {
            title: 'Add new contact',
            links: [
                {
                    route: Route.CONTACT_LIST,
                    icon: Icon.CONTACT,
                    title: 'Contacts'
                },
                {
                    active: true,
                    title: 'Add new contact'
                }
            ]
        };
    },
    autoformOptions: function () {
        return {
            collection: Collection.Contacts,
            schema: Schema.Contact,
            id: FormId.ADMIN_CONTACT_ADD,
            type: 'insert',
            buttonContent: 'Add contact'
        };
    }
});
