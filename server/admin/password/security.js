Collection.Passwords
    .permit(['insert', 'update'])
    .onlyProps([
        'name',
        'username',
        'address',
        'password'
    ])
    .ifHasRole(Role.ADMIN)
    .apply();

Collection.Passwords
    .permit(['remove'])
    .ifHasRole(Role.ADMIN)
    .apply();
