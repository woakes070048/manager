Router.route('/contact/:id/show', {
    name: Route.CONTACT_SHOW,
    template: 'adminContactShow',
    controller: 'AdminController',
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
