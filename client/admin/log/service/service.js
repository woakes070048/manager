Template.adminLogService.onCreated(function () {
    var self = this;
    self.service = new ReactiveVar(null);

    self.autorun(function () {
        self.service.set(Meteor.users.findOne({
            _id: self.data.id
        }));
    });
});

Template.adminLogService.helpers({
    ready: function () {
        return Template.instance().service.get() !== null;
    },
    name: function() {
        return Template.instance().service.get().username;
    },
    backgroundColor: function() {
        return Template.instance().service.get().profile.backgroundColor;
    }
});
