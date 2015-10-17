Router.route('/contact/edit/:id', {
    name: Route.CONTACT_EDIT,
    template: 'adminContactEdit',
    controller: 'AdminController',
    sidebarNavigation: 'contacts',
    waitOn: function () {
        return [
            Meteor.subscribe('adminContactData', this.params.id)
        ];
    },
    data: function () {
        return {
            contact: Collection.Contacts.findOne(this.params.id)
        };
    }
});
