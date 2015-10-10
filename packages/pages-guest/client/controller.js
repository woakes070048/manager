GuestController = RouteController.extend({
    layoutTemplate: 'guestLayout',
    waitOn: function () {
        return [
            Meteor.subscribe('_roles')
        ];
    },
    onBeforeAction: function () {
        if (!Meteor.loggingIn()) {
            if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), Role.ADMIN)) {
                this.redirect('adminDashboard');
            } else {
                this.next();
            }
        }
    }
});
