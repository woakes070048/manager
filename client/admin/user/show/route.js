Router.route('/user/:id/show', {
    name: 'adminUserShow',
    template: 'adminUserShow',
    controller: 'AdminController',
    sidebarNavigation: 'users',
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
