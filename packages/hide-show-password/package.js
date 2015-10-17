Package.describe({
    name: 'manager:hide-show-password',
    version: '0.0.1',
    summary: 'HideShowPassword 2.0.8'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.0.2');

    // Dependencies
    Npm.depends({
        hideshowpassword: '2.0.8'
    });

    // Client files
    api.addFiles([
        '.npm/package/node_modules/hideshowpassword/css/example.minimal.css',
        '.npm/package/node_modules/hideshowpassword/hideShowPassword.min.js'
    ], 'client');
});
