Package.describe({
    name: 'manager:pages-guest',
    version: '0.0.1',
    summary: 'Manager guest pages'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.0.2');

    // Dependencies
    api.use([
        'ecmascript',
        'jquery',
        'blaze-html-templates',
        'accounts-password',
        'iron:router',
        'alanning:roles',
        'mfactory:admin-lte',
        'fortawesome:fontawesome',
        'lookback:body-class',
        'kevohagan:sweetalert',
        'manager:lib-icheck'
    ], 'client');

    // Client files
    api.addFiles([
        // Layout
        'client/layout/layout.html',
        'client/layout/layout.css',
        'client/layout/layout.js',

        // Router controller
        'client/controller.js',

        // Login page
        'client/login/login.html',
        'client/login/login.css',
        'client/login/login.js',
        'client/login/route.js'
    ], 'client');

    // Client export
    api.export([
        'GuestController'
    ], 'client');
});
