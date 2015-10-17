TabularTables.ServiceList = new Tabular.Table({
    name: 'ServiceList',
    collection: Meteor.users,
    allow: function (userId) {
        return Roles.userIsInRole(userId, Role.ADMIN);
    },
    order: [[0, 'desc']],
    autoWidth: false,
    columns: [{
        data: 'id',
        title: 'ID'
    }, {
        data: 'username',
        title: 'Name'
    }, {
        data: 'profile',
        title: 'Label',
        tmpl: Meteor.isClient && Template.adminServiceLabel,
        tmplContext: function (doc) {
            return {
                service: doc
            };
        }
    }, {
        title: 'Options',
        tmpl: Meteor.isClient && Template.adminServiceListOptions
    }]
});
