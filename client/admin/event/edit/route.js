Router.route('/event/edit/:id', {
    name: Route.EVENT_EDIT,
    template: 'adminEventEdit',
    controller: 'AdminController',
    waitOn: function () {
        return [
            Meteor.subscribe('adminEventData', this.params.id),
            Meteor.subscribe('adminContactsSelect')
        ];
    },
    data: function () {
        return {
            event: Collection.Events.findOne(this.params.id)
        };
    }
});
