Router.route('/website/add', {
    name: Route.WEBSITE_ADD,
    template: 'adminWebsiteAdd',
    controller: 'AdminController',
    sidebarNavigation: 'websites'
});
