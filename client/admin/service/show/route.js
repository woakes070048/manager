Router.route('/service/:id/show', {
    name: Route.SERVICE_SHOW,
    template: 'adminServiceShow',
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
