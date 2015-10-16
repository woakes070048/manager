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
        'configuration.js',
        'logs.js',
        'roles.js'
    ], both);

    // Exports
    api.export([
        'Configuration',
        'LogLevel',
        'LogLevelParameters',
        'LogTag',
        'Role'
    ], both);
});
