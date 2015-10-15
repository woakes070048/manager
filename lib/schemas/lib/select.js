Select = {
    getWebsiteValidCodesOptionLabel: function (code) {
        return [code, HttpStatusCodes.getStatusText(code)].join(' - ');
    },
    getWebsiteValidCodesOptions: function () {
        var options = [];

        _.each(HttpStatusCodes, function (code) {
            if (typeof code !== 'number') {
                return false;
            }

            options.push({
                value: code,
                label: Select.getWebsiteValidCodesOptionLabel(code)
            });
        });

        return _.sortBy(options, function (option) {
            return option.label;
        });
    }
};
