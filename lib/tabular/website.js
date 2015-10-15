TabularTables.WebsiteList = new Tabular.Table({
    name: 'WebsiteList',
    collection: Collection.Websites,
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
        data: 'name',
        title: 'Name'
    }, {
        data: 'address',
        title: 'Address'
    }, {
        data: 'attempts',
        title: 'Attempts'
    }, {
        data: 'validCodes',
        title: 'Valid HTTP status codes',
        tmpl: Meteor.isClient && Template.adminWebsiteCodes
    }, {
        title: 'Options',
        tmpl: Meteor.isClient && Template.adminWebsiteListOptions
    }],
    extraFields: ['details']
});
