Collection.Accounts
    .permit(['insert', 'update'])
    .onlyProps([
        'name',
        'nic',
        'email'
    ])
    .ifHasRole(Role.ADMIN)
    .apply();

Collection.Accounts
    .permit(['remove'])
    .ifHasRole(Role.ADMIN)
    .apply();
