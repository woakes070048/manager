Collection.Servers
    .permit(['insert', 'update'])
    .onlyProps([
        'name',
        'serviceName',
        'endpoint',
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
