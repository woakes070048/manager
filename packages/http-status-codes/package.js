Package.describe({
    name: 'manager:http-status-codes',
    version: '0.0.1',
    summary: 'http-status-codes 1.0.5'
});

Package.onUse(function (api) {
    var both = ['client', 'server'];
    api.versionsFrom('1.2.0.2');

    // Dependencies
    Npm.depends({
        'http-status-codes': '1.0.5'
    });

    api.use([
        'cosmos:browserify'
    ], 'client');

    // Lib files
    api.addFiles([
        'lib/codes.browserify.js'
    ], both);

    // Exports
    api.export([
        'HttpStatusCodes'
    ], both);
});
