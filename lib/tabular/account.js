TabularTables.AccountList = new Tabular.Table({
    name: 'AccountList',
    collection: Collection.Accounts,
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
        data: 'nic',
        title: 'NIC'
    }, {
        data: 'email',
        title: 'Email'
    }, {
        title: 'Options',
        tmpl: Meteor.isClient && Template.adminAccountListOptions
    }]
});
