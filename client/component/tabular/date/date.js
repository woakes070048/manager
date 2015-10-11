Template.componentTabularDate.onCreated(function () {
    this.date = new ReactiveVar(moment(this.data.date));
});

Template.componentTabularDate.helpers({
    date: function () {
        return Template.instance().date.get().format('L LT');
    },
    ago: function () {
        return Template.instance().date.get().fromNow();
    }
});
