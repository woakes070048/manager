Security.defineMethod('ifIsService', {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId, doc) {
        return !SecurityMethod.isService(doc);
    }
});

Meteor.users
    .permit(['remove'])
    .ifHasRole(Role.ADMIN)
    .ifIsService()
    .ifIsNotFirst()
    .apply();

