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
        if (_.has(item, 'date')) {
            this.saveDate(item.date);
        }

        this.saveData(item);
    }

    saveDate (date) {
        date = moment(date).startOf('day').toDate();

        var doc = {
            type: this.TYPE_DATE,
            date: date
        };

        var item = this.items.findOne(doc);

        if (!item) {
            this.items.insert(doc);
        }
    }

    saveData (item) {
        var selector = {
            type: this.TYPE_ITEM,
            'item.collectionName': item.collectionName,
            'item.id': item.id
        };

        var modifier = {
            $set: {
                item: item
            }
        };

        this.items.upsert(selector, modifier);
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
