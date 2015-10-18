Router.route('/password/:id/show', {
    name: Route.PASSWORD_SHOW,
    template: 'adminPasswordShow',
    controller: 'AdminController',
    waitOn: function () {
        return [
            Meteor.subscribe('adminPasswordData', this.params.id)
        ];
    },
    data: function () {
        return {
            password: Collection.Passwords.findOne(this.params.id)
        };
    }
});
