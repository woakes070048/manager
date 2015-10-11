Router.route('/logs', {
    name: 'adminLogList',
    template: 'adminLogList',
    controller: 'AdminController',
    waitOn: function () {
        return [
            Meteor.subscribe('adminServicesLabel')
        ];
    }
});
