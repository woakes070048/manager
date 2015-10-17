Collection.Servers
    .permit(['insert', 'update'])
    .onlyProps([
        'name',
        'serviceName',
        'appKey',
        'appSecret',
        'consumerKey'
    ])
    .ifHasRole(Role.ADMIN)
    .apply();

Collection.Servers
    .permit(['remove'])
    .ifHasRole(Role.ADMIN)
    .apply();
