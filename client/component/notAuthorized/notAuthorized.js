Template.componentNotAuthorized.onCreated(function () {
    var name = 'sidebar-collapse';
    var authorized = 'sidebar-mini fixed';

    this.autorun(function () {
        if (Roles.userIsInRole(Meteor.userId(), Role.ADMIN)) {
            BodyClass.remove(name);
            BodyClass.add(authorized);
        } else {
            BodyClass.add(name);
            BodyClass.remove(authorized);
        }
    });
});
