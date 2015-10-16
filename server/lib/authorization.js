checkAuthorization = function () {
    if (!Roles.userIsInRole(Meteor.user(), Role.ADMIN)) {
        throw new Meteor.Error('not-authorized');
    }
};
