Router.route('/user/edit/:id', {
    name: Route.USER_EDIT,
    template: 'adminUserEdit',
    controller: 'AdminController',
    waitOn: function () {
        return [
            Meteor.subscribe('adminUserData', this.params.id)
        ];
    },
    data: function () {
        return {
            user: Meteor.users.findOne(this.params.id)
        };
    }
});
