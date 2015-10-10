Package.describe({
    name: 'manager:configuration',
    version: '0.0.1',
    summary: 'Manager configuration'
});

Package.onUse(function (api) {
    var both = ['client', 'server'];
    api.versionsFrom('1.2.0.2');

    // Lib dependencies
    api.use([
        'ecmascript'
    ], both);

    // Client dependencies
    api.use([
        'blaze',
        'jparker:gravatar'
    ], 'client');

    // Server dependencies
    api.use([
        'accounts-base',
        'accounts-password',
        'mongo',
        'alanning:roles'
    ], 'server');

    // Lib files
    api.addFiles([
        'lib/configuration.js',
        'lib/roles.js'
    ], both);

    // Client files
    api.addFiles([
        'client/helpers.js'
    ], 'client');

    // Server files
    api.addFiles([
        'server/admins.js',
        'server/accounts.js'
    ], 'server');

    // Lib export
    api.export([
        'Configuration',
        'Role'
    ], both);
});
