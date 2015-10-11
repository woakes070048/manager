Template.adminLogTimelineItem.helpers({
    json: function() {
        return JSON.stringify(this.details, null, '\t');
    }
});
