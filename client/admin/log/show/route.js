Router.route('/log/:id/show', {
    name: 'adminLogShow',
    template: 'adminLogShow',
    controller: 'AdminController',
    waitOn: function () {
        return [
            Meteor.subscribe('adminLogShow', this.params.id),
            Meteor.subscribe('adminServiceLabel', this.params.id)
        ];
    },
    data: function () {
        return {
            log: Collection.Logs.findOne(this.params.id)
        };
    }
});
