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
    },
    getUserRolesOptionLabel: function (role) {
        return role.charAt(0).toUpperCase() + role.slice(1);
    },
    getUserRolesOptions: function () {
        var options = [];

        _.each(Role, function (role) {
            if (role === Role.SERVICE) {
                return false;
            }

            options.push({
                value: role,
                label: Select.getUserRolesOptionLabel(role)
            });
        });

        return _.sortBy(options, function (option) {
            return option.label;
        });
    }
};