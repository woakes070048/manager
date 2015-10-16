Router.route('/website/:id/edit', {
    name: 'adminWebsiteEdit',
    template: 'adminWebsiteEdit',
    controller: 'AdminController',
    waitOn: function () {
        return [
            Meteor.subscribe('adminWebsiteData', this.params.id)
        ];
    },
    data: function () {
        return {
            website: Collection.Websites.findOne(this.params.id)
        };
    }
});
