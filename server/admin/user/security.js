Security.defineMethod('ifIsUser', {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId, doc) {
        return !SecurityMethod.isUser(doc);
    }
});

Security.defineMethod('ifIsNotLastUser', {
    fetch: [],
    transform: null,
    deny: function () {
        return SecurityMethod.isLastUser();
    }
});

Meteor.users
    .permit(['remove'])
    .ifHasRole(Role.ADMIN)
    .ifIsUser()
    .ifIsNotLastUser()
    .apply();
