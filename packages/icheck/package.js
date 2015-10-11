Package.describe({
    name: 'manager:icheck',
    version: '0.0.1',
    summary: 'iCheck 1.0.2, square blue theme'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.0.2');

    // Dependencies
    Npm.depends({
        icheck: '1.0.2'
    });

    // Client files
    api.addFiles([
        '.npm/package/node_modules/icheck/icheck.min.js',
        '.npm/package/node_modules/icheck/skins/square/blue.css'
    ], 'client');

    // Client assets
    api.addAssets([
        '.npm/package/node_modules/icheck/skins/square/blue.png',
        '.npm/package/node_modules/icheck/skins/square/blue@2x.png'
    ], 'client');
});
