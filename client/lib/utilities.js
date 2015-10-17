Utilities = {
    objectToCss: function (obj) {
        var results = [];

        _.each(obj, function (value, key) {
            results.push(key + ': ' + value + ';');
        });

        return results.join(' ');
    }
};
