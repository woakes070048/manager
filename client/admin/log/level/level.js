Template.adminLogLevel.helpers({
    color: function() {
        return LogLevelParameters[this.level].color;
    },
    label: function() {
        return LogLevelParameters[this.level].label;
    }
});
