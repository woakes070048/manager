Package.describe({
    name: 'manager:pages-components',
    version: '0.0.1',
    summary: 'Manager pages components'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.0.2');

    // Dependencies
    api.use([
        'ecmascript',
        'blaze-html-templates'
    ], 'client');

    // Client files
    api.addFiles([
        // Header
        'client/header/header.html',
        'client/header/header.js'
    ], 'client');
});
