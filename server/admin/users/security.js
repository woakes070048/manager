Meteor.users
    .permit(['remove'])
    .ifHasRole(Role.ADMIN)
    .apply();
