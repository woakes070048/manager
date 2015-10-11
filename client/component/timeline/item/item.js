Template.componentTimelineItem.helpers({
    time: function () {
        return moment(this.date).format('LT');
    },
    ago: function () {
        return moment(this.date).fromNow();
    },
    data: function () {
        return {
            doc: this.doc
        };
    }
});
