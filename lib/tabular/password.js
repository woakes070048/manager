TabularTables.PasswordList = new Tabular.Table({
    name: 'PasswordList',
    collection: Collection.Passwords,
    allow: function (userId) {
        return Roles.userIsInRole(userId, Role.ADMIN);
    },
    order: [[0, 'desc']],
    autoWidth: false,
    columns: [{
        data: 'id',
        title: 'ID'
    }, {
        data: 'name',
        title: 'Name'
    }, {
        data: 'username',
        title: 'User Name'
    }, {
        data: 'address',
        title: 'Address'
    }, {
        title: 'Options',
        tmpl: Meteor.isClient && Template.adminPasswordListOptions
    }]
});
