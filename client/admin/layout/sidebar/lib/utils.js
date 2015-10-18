class SidebarUtilsClass {
    constructor (template) {
        this.currentItem = template.data ? template.data : {};
    }

    template (currentChild) {
        if (!_.has(currentChild, 'type')) {
            throw new Error('The element cannot have no type');
        }

        if (_.has(this.currentItem, 'type') && currentChild.type === 'header') {
            throw new Error('Cannot insert an header inside antoher one in the sidebar');
        }

        return Template[SidebarUtilsClass.getTemplateName(currentChild.type)];
    }

    isActive () {
        return this.currentItem.type === 'header'
            ? false
            : this.parseItem(this.currentItem);
    }

    parseItem (item) {
        if (_.has(item, 'children')) {
            var self = this;

            return item.children.some(function (element) {
                return self.parseItem(element);
            });
        }

        return SidebarUtilsClass.checkItem(item);
    }

    static checkItem (item) {
        if (_.has(item, 'seek')) {
            if (item.seek === 'self') {
                return ActiveRoute.name(item.route);
            }

            else if(item.seek === 'after') {
                return ActiveRoute.name(new RegExp('^' + item.route));
            }
        }

        if (_.has(item, 'regex')) {
            return ActiveRoute.name(new RegExp(item.regex));
        }

        if (_.has(item, 'route')) {
            return ActiveRoute.name(SidebarUtilsClass.getActiveRouteRegex(item.route));
        }

        return false;
    }

    static getActiveRouteRegex (route){
        return new RegExp('^' + route.split(/(?=[A-Z][a-z]+$)/)[0]);
    }

    static getTemplateName (type){
        return 'adminLayoutSidebar' + type.charAt(0).toUpperCase() + type.slice(1);
    }
}

SidebarUtils = SidebarUtilsClass;
