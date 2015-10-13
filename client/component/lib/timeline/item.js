class TimelineItemClass {
    constructor (collection, icon = 'tachometer', doc, date, template) {
        this.collectionName = collection._name;
        this.icon = icon;
        this.doc = doc;
        this.date = date;
        this.template = template;
    }
}

TimelineItem = TimelineItemClass;
