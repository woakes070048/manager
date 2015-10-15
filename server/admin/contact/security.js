Collection.Contacts
    .permit(['insert', 'update'])
    .onlyProps([
        'lastName',
        'firstName',
        'email',
        'phone'
    ])
    .ifHasRole(Role.ADMIN)
    .apply();

Collection.Contacts
    .permit(['remove'])
    .ifHasRole(Role.ADMIN)
    .apply();
