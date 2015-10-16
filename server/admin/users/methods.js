Meteor.methods({
    addUser: function (doc) {
        checkAuthorization();
        checkKeys(doc, 'userAdd');

        var id = Accounts.createUser({
            email: doc.email,
            password: doc.password,
            profile: {
                firstName: doc.firstName,
                lastName: doc.lastName,
                phone: doc.phone
            }
        });

        Roles.addUsersToRoles(id, doc.roles);

        return id;
    },
    editUser: function (modifier, id) {
        var doc = modifier.$set;

        checkAuthorization();
        checkKeys(doc, 'userEdit');

        var user = Meteor.users.findOne(id);

        if (!user) {
            throw new Meteor.Error('bad-request');
        }

        if (user.emails[0].address !== doc.email) {
            Accounts.addEmail(id, doc.email);
            Accounts.removeEmail(id, user.emails[0].address);
        }

        if (_.has(doc, 'password')) {
            Accounts.setPassword(id, doc.password);
        }

        Meteor.users.update(id, {
            $set: {
                profile: {
                    firstName: doc.firstName,
                    lastName: doc.lastName,
                    phone: doc.phone
                }
            }
        });

        Roles.setUserRoles(id, doc.roles);
    }
});
