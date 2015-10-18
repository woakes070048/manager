Schema.Event = new SimpleSchema({
    title: {
        type: String,
        autoform: {
            label: 'Title',
            placeholder: 'Meeting'
        }
    },
    allDay: {
        type: Boolean,
        autoform: {
            label: 'All Day'
        }
    },
    start: SchemaFields.getDateField('Start'),
    end: optional(SchemaFields.getDateField('End')),
    place: {
        type: String,
        optional: true,
        autoform: {
            label: 'Place',
            placeholder: 'Smalt Création'
        }
    },
    contacts: {
        type: [String],
        optional: true,
        autoform: {
            type: 'select2',
            options: Select.getEventContactsOptions,
            multiple: true,
            label: 'Contacts',
            select2Options: {
                placeholder: 'John Doe'
            }
        }
    },
    comment: {
        type: String,
        optional: true,
        autoform: {
            label: 'Comment',
            placeholder: 'Be on time !',
            rows: 5
        }
    },
    backgroundColor: optional(SchemaFields.getColorField({
        label: 'Background Color',
        placeholder: '#3a87ad'
    })),
    borderColor: optional(SchemaFields.getColorField({
        label: 'Border Color',
        placeholder: '#3a87ad'
    })),
    textColor: optional(SchemaFields.getColorField({
        label: 'Text Color',
        placeholder: '#ffffff'
    }))
});
