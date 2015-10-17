Router.route('/logs', {
    name: Route.LOG_LIST,
    template: 'adminLogList',
    controller: 'AdminController',
    sidebarNavigation: 'logs'
});
