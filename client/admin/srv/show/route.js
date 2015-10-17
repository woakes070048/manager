Router.route('/server/:id/show', {
    name: Route.SERVER_SHOW,
    template: 'adminServerShow',
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
