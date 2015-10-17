Utilities = {
    objectToCss: function (obj) {
        var results = [];

        _.each(obj, function (value, key) {
            results.push(key + ': ' + value + ';');
        });

        return results.join(' ');
    },
    initializePasswordInputs: function () {
        $('input[type="password"]').hideShowPassword(false, true);
    }
};
