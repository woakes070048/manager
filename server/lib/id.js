getNextId = function (collection) {
    if (typeof collection !== 'string') {
        collection = collection._name;
    }

    var selector = {
        key: ParameterKey.LAST_ID,
        collection: collection
    };

    var parameter = Collection.Parameters.findOne(selector);

    if (!parameter) {
        selector.value = 1;
        Collection.Parameters.insert(selector);

        return 1;
    }

    var id = parseInt(parameter.value) + 1;

    Collection.Parameters.update(selector, {
        $set: {
            value: id
        }
    });

    return id;
};
