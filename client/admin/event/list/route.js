Router.route('/events', {
    name: Route.EVENT_LIST,
    template: 'adminEventList',
    controller: 'AdminController',
    waitOn: function () {
        return [
            Meteor.subscribe('adminEventList')
        ];
    }
});
