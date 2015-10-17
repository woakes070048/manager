TabularTables.ServerList = new Tabular.Table({
    name: 'ServerList',
    collection: Collection.Servers,
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
        title: 'Options',
        tmpl: Meteor.isClient && Template.adminServerListOptions
    }]
});
