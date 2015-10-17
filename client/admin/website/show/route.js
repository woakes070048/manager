Router.route('/website/:id/show', {
    name: 'adminWebsiteShow',
    template: 'adminWebsiteShow',
    controller: 'AdminController',
    sidebarNavigation: 'websites',
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
