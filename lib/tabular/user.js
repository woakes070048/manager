TabularTables.UserList = new Tabular.Table({
    name: 'UserList',
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
        data: 'profile.firstName',
        title: 'First name'
    }, {
        data: 'profile.lastName',
        title: 'Last name'
    }, {
        data: 'emails',
        title: 'Email',
        render: function (val) {
            return val[0].address;
        }
    }, {
        data: 'profile.phone',
        title: 'Phone'
    }, {
        data: 'roles',
        title: 'Roles',
        tmpl: Meteor.isClient && Template.adminUserRoles,
        tmplContext: function (doc) {
            return {
                roles: doc.roles
            };
        }
    }, {
        title: 'Options',
        tmpl: Meteor.isClient && Template.adminUserListOptions
    }]
});
