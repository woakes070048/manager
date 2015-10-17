Template.adminUserListOptions.helpers({
    removable: function () {
        return !SecurityMethod.isLastUser();
    }
});
