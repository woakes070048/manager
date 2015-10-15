Template.adminWebsiteTimelineItem.helpers({
    details: function () {
        return _.pick(this, [
            'id',
            'address',
            'attempts'
        ]);
    },
    json: function () {
        return JSON.stringify(this.details, null, '\t');
    }
});
