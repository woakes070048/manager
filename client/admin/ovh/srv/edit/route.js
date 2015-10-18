Router.route('/server/:id/edit', {
    name: Route.SERVER_EDIT,
    template: 'adminServerEdit',
    controller: 'AdminController',
    waitOn: function () {
        return [
            Meteor.subscribe('adminServerData', this.params.id)
        ];
    },
    data: function () {
        return {
            server: Collection.Servers.findOne(this.params.id)
        };
    }
});
