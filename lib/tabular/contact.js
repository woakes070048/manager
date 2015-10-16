TabularTables.ContactList = new Tabular.Table({
    name: 'ContactList',
    collection: Collection.Contacts,
    allow: function (userId) {
        return Roles.userIsInRole(userId, Role.ADMIN);
    },
    order: [[0, 'desc']],
    autoWidth: false,
    columns: [{
        data: 'id',
        title: 'ID'
    }, {
        data: 'lastName',
        title: 'Last Name'
    }, {
        data: 'firstName',
        title: 'First Name'
    }, {
        data: 'email',
        title: 'Email'
    }, {
        data: 'phone',
        title: 'Phone'
    }, {
        title: 'Options',
        tmpl: Meteor.isClient && Template.adminContactListOptions
    }]
});
