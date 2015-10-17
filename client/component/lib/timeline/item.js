class TimelineItemClass {
    constructor (collection, doc, date, template, icon = Icon.DASHBOARD) {
        this.collectionName = collection._name;
        this.icon = icon;
        this.doc = doc;
        this.date = date;
        this.template = template;
    }
}

TimelineItem = TimelineItemClass;
