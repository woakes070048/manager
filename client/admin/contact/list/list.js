Template.adminContactList.helpers({
    headerOptions: function () {
        return {
            title: 'Contacts',
            links: [
                {
                    active: true,
                    icon: 'suitcase',
                    title: 'Contacts'
                }
            ]
        };
    },
    actionsOptions: function () {
        return {
            links: [
                {
                    type: 'primary',
                    icon: 'plus',
                    title: 'Add new contact',
                    route: 'adminContactAdd'
                }
            ]
        };
    }
});
