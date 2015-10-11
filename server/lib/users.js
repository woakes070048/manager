Meteor.startup(function() {
    if (Meteor.users.find().count() === 0) {
        // Default admins
        var admins = Meteor.settings.default.admins;

        admins.forEach(function (admin) {
            var id = Accounts.createUser({
                email: admin.email,
                password: admin.password,
                profile: admin.profile
            });

            Roles.addUsersToRoles(id, Role.ADMIN);
        });

        console.log('Default admins created');

        // Default services
        var services = Meteor.settings.default.services;

        services.forEach(function (service) {
            var id = Accounts.createUser({
                username: service.name,
                password: service.password,
                profile: service.options
            });

            Roles.addUsersToRoles(id, Role.SERVICE);
        });

        console.log('Default services created');
    }
});
