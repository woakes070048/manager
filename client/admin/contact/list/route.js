Router.route('/contacts', {
    name: Route.CONTACT_LIST,
    template: 'adminContactList',
    controller: 'AdminController',
    sidebarNavigation: 'contacts'
});
