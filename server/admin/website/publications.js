Meteor.publish('adminWebsiteData', function (id) {
    if (!Roles.userIsInRole(this.userId, Role.ADMIN)) {
        return [];
    }

    return Collection.Websites.find({
        _id: id
    });
});
