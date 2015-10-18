Router.route('/password/:id/edit', {
    name: Route.PASSWORD_EDIT,
    template: 'adminPasswordEdit',
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
