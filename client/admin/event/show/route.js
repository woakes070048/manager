Router.route('/event/:id/show', {
    name: Route.EVENT_SHOW,
    template: 'adminEventShow',
    controller: 'AdminController',
    waitOn: function () {
        return [
            Meteor.subscribe('adminEventData', this.params.id)
        ];
    },
    data: function () {
        return {
            event: Collection.Events.findOne(this.params.id)
        };
    }
});
