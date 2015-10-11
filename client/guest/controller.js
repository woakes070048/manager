GuestController = RouteController.extend({
    layoutTemplate: 'guestLayout',
    waitOn: function () {
        return [
            Meteor.subscribe('_roles')
        ];
    },
    onBeforeAction: function () {
        if (!Meteor.loggingIn()) {
            // Guest
            if (!Meteor.userId()) {
                this.next();
            }

            // Admin
            else if (Roles.userIsInRole(Meteor.user(), Role.ADMIN)) {
                this.redirect('adminDashboard');
            }

            // Not authorized
            else {
                this.render('componentNotAuthorized');
            }
        }
    }
});
