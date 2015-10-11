AdminController = RouteController.extend({
    layoutTemplate: 'adminLayout',
    waitOn: function () {
        return [
            Meteor.subscribe('_roles')
        ];
    },
    onBeforeAction: function () {
        if (!Meteor.loggingIn()) {
            if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), Role.ADMIN)) {
                this.next();
            } else {
                this.redirect('guestLogin');
            }
        }
    }
});
