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

        return sorted(options);
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

        return sorted(options);
    },
    getServerEndpointOptions: function () {
        var options = [];

        _.each(Endpoint, function (label, value) {
            options.push({
                value: value,
                label: label
            });
        });

        return sorted(options);
    },
    getEventContactsOptions: function () {
        var options = Collection.Contacts.find().map(function (contact) {
            return {
                value: contact._id,
                label: [contact.firstName, contact.lastName].join(' ')
            };
        });

        return sorted(options);
    }
};

function sorted (options) {
    return _.sortBy(options, function (option) {
        return option.label;
    });
}
