Template.adminLayoutSidebarItem.onCreated(function () {
    this.utils = new SidebarUtils(this);
});

Template.adminLayoutSidebarItem.helpers({
    isActive: function () {
        if(Template.instance().utils.isActive()){
            return "active";
        }
        return false;
    }
});