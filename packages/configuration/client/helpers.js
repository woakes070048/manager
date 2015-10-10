var helpers = [
    {
        name: 'Configuration',
        value: Configuration
    }, {
        name: 'Role',
        value: Role
    }, {
        name: 'avatarUrl',
        value: function (user, size) {
            return Gravatar.imageUrl(user.emails[0].address, {
                size: size,
                default: 'identicon'
            });
        }
    }
];

helpers.forEach(function (helper) {
    Package.blaze.Blaze.registerHelper(
        helper.name,
        typeof helper.value === 'object'
            ? function () { return helper.value; }
            : helper.value
    );
});
