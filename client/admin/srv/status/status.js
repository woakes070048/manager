Template.adminServerStatus.onCreated(function () {
    var self = this;

    this.data.ready         = new ReactiveVar(false);
    this.data.up            = new ReactiveVar();
    this.data.displayName   = new ReactiveVar();

    Meteor.call('adminServerStatus', this.data.server._id, function (error, result) {
        if (error) {
            Alert.open(error);
            return false;
        }

        self.data.up.set(result.state === 'running');
        self.data.displayName.set(result.displayName);
        self.data.ready.set(true);
    });
});

Template.adminServerStatus.helpers({
    color: function () {
        return this.up.get() ? 'green' : 'red';
    },
    icon: function () {
        return this.up.get() ? 'up' : 'down';
    },
    label: function () {
        return this.up.get() ? 'up' : 'down';
    }
});
