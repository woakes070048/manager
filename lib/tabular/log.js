TabularTables.LogList = new Tabular.Table({
    name: 'LogList',
    collection: Collection.Logs,
    allow: function (userId) {
        return Roles.userIsInRole(userId, Role.ADMIN);
    },
    order: [[0, 'desc']],
    autoWidth: false,
    columns: [{
        data: 'id',
        title: 'ID'
    }, {
        data: 'createdAt',
        title: 'Date',
        tmpl: Meteor.isClient && Template.componentTabularDate,
        tmplContext: function (doc) {
            return {
                date: doc.createdAt
            };
        }
    }, {
        data: 'message',
        title: 'Message'
    }, {
        data: 'service',
        title: 'Service',
        tmpl: Meteor.isClient && Template.adminLogService,
        tmplContext: function (doc) {
            return {
                id: doc.service
            };
        }
    }, {
        data: 'level',
        title: 'Level',
        tmpl: Meteor.isClient && Template.adminLogLevel
    }, {
        data: 'tags',
        title: 'Tags',
        tmpl: Meteor.isClient && Template.adminLogTags
    }, {
        title: 'Options',
        tmpl: Meteor.isClient && Template.adminLogListOptions
    }]
});
