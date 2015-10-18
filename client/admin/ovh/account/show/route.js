Router.route('/account/:id/show', {
    name: Route.ACCOUNT_SHOW,
    template: 'adminAccountShow',
    controller: 'AdminController',
    waitOn: function () {
        return [
            Meteor.subscribe('adminAccountData', this.params.id)
        ];
    },
    data: function () {
        return {
            account: Collection.Accounts.findOne(this.params.id)
        };
    }
});
