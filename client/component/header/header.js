Template.componentHeader.helpers({
    attributes: function () {
        return this.active
            ? { class: 'active' }
            : {};
    }
});
