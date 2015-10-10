Package.describe({
    name: 'manager:pages-static',
    version: '0.0.1',
    summary: 'Manager static pages'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.0.2');

    // Dependencies
    api.use([
        'ecmascript',
        'blaze-html-templates',
        'manager:pages-components',
        'lookback:body-class',
        'mfactory:admin-lte',
        'alanning:roles',
        'iron:router'
    ], 'client');

    // Client files
    api.addFiles([
        // Loading
        'client/loading/loading.html',
        'client/loading/loading.css',
        'client/loading/loading.js',

        // Not found
        'client/notFound/content/content.html',
        'client/notFound/content/content.css',
        'client/notFound/content/content.js',
        'client/notFound/notFound.html',
        'client/notFound/notFound.js'
    ], 'client');
});
