Collection.Events
    .permit(['insert', 'update'])
    .onlyProps([
        'title',
        'allDay',
        'start',
        'end',
        'place',
        'contacts',
        'comment',
        'backgroundColor',
        'borderColor',
        'textColor'
    ])
    .ifHasRole(Role.ADMIN)
    .apply();

Collection.Events
    .permit(['remove'])
    .ifHasRole(Role.ADMIN)
    .apply();
