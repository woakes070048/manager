Package.describe({
    name: 'manager:select2',
    version: '0.0.1',
    summary: 'Select2 4.0.0'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.0.2');

    // Dependencies
    Npm.depends({
        select2: '4.0.0'
    });

    // Client files
    api.addFiles([
        '.npm/package/node_modules/select2/dist/css/select2.min.css',
        '.npm/package/node_modules/select2/dist/js/select2.min.js'
    ], 'client');
});
