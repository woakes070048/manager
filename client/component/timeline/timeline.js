Template.componentTimeline.helpers({
    items: function () {
        return this.timeline.find();
    },
    isDate: function () {
        return this.type === Template.instance().data.timeline.TYPE_DATE;
    }
});
