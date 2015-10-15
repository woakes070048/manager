Router.route('/contact/edit/:id', {
    name: 'adminContactEdit',
    template: 'adminContactEdit',
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
