Package.describe({
    name: 'manager:pages-admin',
    version: '0.0.1',
    summary: 'Manager admin pages'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.0.2');

    // Dependencies
    api.use([
        'ecmascript',
        'blaze-html-templates',
        'iron:router',
        'alanning:roles',
        'mfactory:admin-lte',
        'fortawesome:fontawesome'
    ], 'client');

    // Client files
    api.addFiles([
        // Layout
        'client/layout/navbar/user/user.html',
        'client/layout/navbar/user/user.js',
        'client/layout/navbar/navbar.html',
        'client/layout/sidebar/sidebar.html',
        'client/layout/control/control.html',
        'client/layout/layout.html',

        // Router controller
        'client/controller.js',

        // Dashboard page
        'client/dashboard/dashboard.html',
        'client/dashboard/route.js'
    ], 'client');

    // Client export
    api.export([
        'AdminController'
    ], 'client');
});
