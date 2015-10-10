Router.configure({
    notFoundTemplate: 'staticNotFound'
});

Template.staticNotFound.onCreated(function () {
    var name = 'sidebar-collapse';

    this.autorun(function () {
        if (Roles.userIsInRole(Meteor.userId(), Role.ADMIN)) {
            BodyClass.remove(name);
        } else {
            BodyClass.add(name);
        }
    });
});
