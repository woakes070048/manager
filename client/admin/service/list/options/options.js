Template.adminServiceListOptions.helpers({
    removable: function () {
        return !SecurityMethod.isFirst(this);
    }
});
