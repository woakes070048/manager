Package.describe({
    name: 'manager:configuration',
    version: '0.0.1',
    summary: 'Manager configuration'
});

Package.onUse(function (api) {
    var both = ['client', 'server'];
    api.versionsFrom('1.2.0.2');

    // Lib files
    api.addFiles([
        'lib/configuration.js',
        'lib/icons.js',
        'lib/logs.js',
        'lib/roles.js',
        'lib/routes.js',
        'lib/security.js',
        'lib/selectors.js'
    ], both);

    // Exports
    api.export([
        'Configuration',
        'Icon',
        'LogLevel',
        'LogLevelParameters',
        'LogTag',
        'Route',
        'Role',
        'SecurityMethod',
        'Selector'
    ], both);
});
