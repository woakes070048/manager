Router.route('/service/edit/:id', {
    name: Route.SERVICE_EDIT,
    template: 'adminServiceEdit',
    controller: 'AdminController',
    waitOn: function () {
        return [
            Meteor.subscribe('adminServiceData', this.params.id)
        ];
    },
    data: function () {
        return {
            service: Meteor.users.findOne(this.params.id)
        };
    }
});
