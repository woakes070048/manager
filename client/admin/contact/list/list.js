Template.adminContactList.helpers({
    headerOptions: function () {
        return {
            title: 'Contacts',
            links: [
                {
                    active: true,
                    icon: Icon.CONTACT,
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
                    route: Route.CONTACT_ADD
                }
            ]
        };
    }
});
