Selector = {
    getIsUserSelector: function () {
        return {
            roles: {
                $nin: [Role.SERVICE]
            }
        };
    },
    getIsServiceSelector: function () {
        return {
            roles: {
                $in: [Role.SERVICE]
            }
        };
    }
};
