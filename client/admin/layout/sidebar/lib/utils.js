class SidebarUtilsClass {
    constructor (template) {
        this.currentItem = template.data;
    }

    template (currentChild){
        if(!currentChild.hasOwnProperty('type'))
            throw "The element cannot have no type";
        if(this.currentItem.hasOwnProperty('type') && currentChild.type === "header")
            throw "Cannot insert an header inside antoher one in the sidebar";
        return Template[SidebarUtilsClass.typeTemplate(currentChild.type)];
    }

    isActive (){
        if(this.currentItem.type === "header"){
            return false;
        }
        return this._parse(this.currentItem);
    }

    _parse (item){
        if(item.hasOwnProperty('children')){
            var me = this;
            return item.children.some(function (element) {
                return me._parse(element);
            })
        }
        return this._check(item);
    }

    _check (item){
        if(item.hasOwnProperty('seek')){
            if(item.seek === "self")
                return ActiveRoute.name(item.route);
            else if(item.seek === "after")
                return ActiveRoute.name(new RegExp('^'+item.route));
        }
        if(item.hasOwnProperty('regex')){
            return ActiveRoute.name(new RegExp(item.regex));
        }
        if(item.hasOwnProperty('route')){
            return ActiveRoute.name(SidebarUtilsClass.regexRoute(item.route));
        }
        return false;
    }

    static regexRoute (route){
        return new RegExp('^' + route.split(/(?=[A-Z][a-z]+$)/)[0]);
    }

    static typeTemplate (type){
        return "adminLayoutSidebar" + type.charAt(0).toUpperCase() + type.slice(1);
    }
}

SidebarUtils = SidebarUtilsClass;