Router.route('/event/add', {
    name: Route.EVENT_ADD,
    template: 'adminEventAdd',
    controller: 'AdminController',
    waitOn: function () {
        return [
            Meteor.subscribe('adminContactsSelect')
        ];
    }
});
