Template.adminServiceLabel.onCreated(function () {
    var self = this;

    if (_.has(self.data, 'service')) {
        self.service = new ReactiveVar(self.data.service);
    } else {
        self.service = new ReactiveVar(null);

        self.subscribe('adminServiceLabel', self.data.id, {
            onReady: function () {
                self.service.set(Meteor.users.findOne({
                    _id: self.data.id
                }));
            }
        });
    }
});

Template.adminServiceLabel.helpers({
    data: function() {
        return Template.instance().service.get();
    },
    style: function() {
        return Utilities.objectToCss({
            color: this.profile.textColor,
            'background-color': this.profile.backgroundColor
        });
    }
});
