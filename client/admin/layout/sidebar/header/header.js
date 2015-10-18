Template.adminLayoutSidebarHeader.onCreated(function () {
    this.utils = new SidebarUtils(this);
});

Template.adminLayoutSidebarHeader.helpers({
    template: function () {
        return Template.instance().utils.template(this);
    }
});