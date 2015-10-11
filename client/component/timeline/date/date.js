Template.componentTimelineDate.onCreated(function () {
    this.date = new ReactiveVar(moment(this.data.date));
});

Template.componentTimelineDate.helpers({
    date: function () {
        return Template.instance().date.get().format('LL');
    },
    ago: function () {
        return Template.instance().date.get().fromNow();
    }
});
