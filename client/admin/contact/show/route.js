Router.route('/contact/:id/show', {
    name: 'adminContactShow',
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
