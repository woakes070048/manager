Template.adminLayoutSidebarItem.onCreated(function () {
    this.utils = new SidebarUtils(this);
});

Template.adminLayoutSidebarItem.helpers({
    isActive: function () {
        return Template.instance().utils.isActive() ? 'active' : false;
    }
});