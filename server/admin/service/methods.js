Meteor.methods({
    addService: function (doc) {
        checkAuthorization();
        checkKeys(doc, 'serviceAdd');

        var id = Accounts.createUser({
            username: doc.name,
            password: doc.password,
            profile: {
                textColor: doc.textColor,
                backgroundColor: doc.backgroundColor
            }
        });

        Roles.addUsersToRoles(id, Role.SERVICE);

        return id;
    },
    editService: function (modifier, id) {
        var doc = modifier.$set;

        checkAuthorization();
        checkKeys(doc, 'serviceEdit');

        var service = Meteor.users.findOne(id);

        if (!service) {
            throw new Meteor.Error('bad-request');
        }

        if (service.username !== doc.name) {
            Accounts.setUsername(id, doc.name);
        }

        if (_.has(doc, 'password')) {
            Accounts.setPassword(id, doc.password);
        }

        Meteor.users.update(id, {
            $set: {
                profile: {
                    textColor: doc.textColor,
                    backgroundColor: doc.backgroundColor
                }
            }
        });
    }
});
