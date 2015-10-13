class TimelineClass {
    constructor (item = null) {
        this.items = new Mongo.Collection(null);

        this.TYPE_DATE = 0;
        this.TYPE_ITEM = 1;

        if (item) {
            this.saveItem(item);
        }
    }

    saveItem (item) {
        this.saveDate(item.date);
        this.saveDoc(item);
    }

    saveDate (date) {
        date = moment(date).startOf('day').toDate();

        var itemDoc = {
            type: this.TYPE_DATE,
            date: date
        };

        var item = this.items.findOne(itemDoc);

        if (!item) {
            this.items.insert(itemDoc);
        }
    }

    saveDoc (item) {
        this.items.upsert({
            type: this.TYPE_ITEM,
            collectionName: item.collectionName,
            docId: item.doc._id
        }, {
            $set: item
        });
    }

    find (sort = 1) {
        return this.items.find({}, {
            sort: {
                createdAt: sort
            }
        });
    }
}

Timeline = TimelineClass;
