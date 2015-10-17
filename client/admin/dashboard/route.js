Router.route('/', {
    name: Route.DASHBOARD,
    template: 'adminDashboard',
    controller: 'AdminController',
    waitOn: function () {
        return [
            Meteor.subscribe('adminServerList')
        ];
    }
});
