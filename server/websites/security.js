Collection.Websites
    .permit(['insert', 'update'])
    .onlyProps([
        'name',
        'address',
        'attempts',
        'validCodes'
    ])
    .ifHasRole(Role.ADMIN)
    .apply();

Collection.Websites
    .permit(['remove'])
    .ifHasRole(Role.ADMIN)
    .apply();
