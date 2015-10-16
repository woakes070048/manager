Template.adminContactEdit.helpers({
    headerOptions: function () {
        return {
            title: 'Edit contact',
            links: [
                {
                    route: 'adminContactList',
                    icon: 'suitcase',
                    title: 'Contacts'
                },
                {
                    current: true,
                    title: 'Edit contact'
                }
            ]
        };
    },
    autoformOptions: function () {
        return {
            collection: Collection.Contacts,
            schema: Schema.Contact,
            id: FormId.ADMIN_CONTACT_EDIT,
            type: 'update',
            doc: this.contact,
            buttonContent: 'Edit contact'
        };
    }
});