Template.adminEventTimelineItem.helpers({
    allDay: function () {
        return this.allDay ? 'Yes' : 'No'
    },
    formatDate: function (date) {
        return moment(date).format('LLLL LTS');
    }
});
