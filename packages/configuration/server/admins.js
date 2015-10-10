Meteor.startup(function() {
    if (Meteor.users.find().count() === 0) {
        // Default admins
        var admins = Meteor.settings.defaultAdmins;

        admins.forEach(function (admin) {
            var id = Accounts.createUser({
                email: admin.email,
                password: admin.password,
                profile: admin.profile
            });

            Roles.addUsersToRoles(id, Role.ADMIN);
        });

        console.log('Default admins created');
    }
});
