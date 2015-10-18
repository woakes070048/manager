Template.adminLayoutSidebarList.onCreated(function () {
    this.utils = new SidebarUtils(this);
});

Template.adminLayoutSidebarList.helpers({
    template: function () {
        return Template.instance().utils.template(this);
    },
    isActive: function () {
        if(Template.instance().utils.isActive()){
            return "active";
        }
        return false;
    }
});