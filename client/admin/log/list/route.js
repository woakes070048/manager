Router.route('/logs', {
    name: 'adminLogList',
    template: 'adminLogList',
    controller: 'AdminController',
    sidebarNavigation: 'logs',
    waitOn: function () {
        return [
            Meteor.subscribe('adminServicesLabel')
        ];
    }
});
