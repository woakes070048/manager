checkKeys = function (input, name) {
    // Required keys
    var keys = getRequiredKeys(name);
    var output = {};

    keys.forEach(function (key) {
        if (!_.has(input, key) || input[key] === null || input[key].length === 0) {
            throw new Meteor.Error('bad-request');
        }

        output[key] = input[key];
    });

    // Optional keys
    var optionalKeys = getOptionalKeys(name);

    if (optionalKeys !== null) {
        optionalKeys.forEach(function (key) {
            if (_.has(input, key)) {
                output[key] = input[key];
            }
        });
    }

    return output;
};

getRequiredKeys = function (name) {
    var keys = null;

    switch (name) {
        case 'userAdd':
            keys = ['firstName', 'lastName', 'email', 'phone', 'roles', 'password'];
            break;
        case 'userEdit':
            keys = _.without(getRequiredKeys('userAdd'), 'password');
            break;
        case 'serviceAdd':
            keys = ['name', 'password', 'textColor', 'backgroundColor'];
            break;
        case 'serviceEdit':
            keys = _.without(getRequiredKeys('serviceAdd'), 'password');
            break;
        default:
            throw new Error('Required keys not defined');
    }

    return keys;
};

getOptionalKeys = function (name) {
    var keys = null;

    switch (name) {
        case 'userEdit':
            keys = ['password'];
            break;
        case 'serviceEdit':
            keys = ['password'];
            break;
        default:
            keys = null;
    }

    return keys;
};
