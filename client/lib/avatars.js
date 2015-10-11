Template.registerHelper('avatarUrl', function (user, size) {
    return Gravatar.imageUrl(user.emails[0].address, {
        size: size,
        default: 'identicon'
    });
});
