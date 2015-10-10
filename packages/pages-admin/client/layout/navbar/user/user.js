Template.adminLayoutNavbarUser.helpers({
    fullName: function () {
        return [Meteor.user().profile.firstName, Meteor.user().profile.lastName].join(' ');
    },
    email: function () {
        return Meteor.user().emails[0].address;
    }
});

Template.adminLayoutNavbarUser.events({
    'click #sign-out': function () {
        Meteor.logout();
    }
});
