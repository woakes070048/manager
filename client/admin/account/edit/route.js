Router.route('/account/edit/:id', {
    name: Route.ACCOUNT_EDIT,
    template: 'adminAccountEdit',
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
