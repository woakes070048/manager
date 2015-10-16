Template.componentTabularList.helpers({
    selector: function () {
        return _.has(this, 'selector') ? this.selector : {};
    }
});
