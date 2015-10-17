Package.describe({
    name: 'manager:admin-lte',
    version: '0.0.1',
    summary: 'AdminLTE 2.3.0'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.0.2');

    // Dependencies
    Npm.depends({
        'admin-lte': '2.3.0'
    });

    api.use([
        'jquery',
        'twbs:bootstrap'
    ], 'client');

    // Client files
    api.addFiles([
        '.npm/package/node_modules/admin-lte/dist/css/AdminLTE.min.css',
        '.npm/package/node_modules/admin-lte/dist/css/skins/_all-skins.min.css',
        '.npm/package/node_modules/admin-lte/dist/js/app.min.js'
    ], 'client');
});
