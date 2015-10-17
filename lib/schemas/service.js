function getFields () {
    return {
        textColor: SchemaFields.getColorField({
            label: 'Text Color',
            placeholder: '#ffffff'
        }),
        backgroundColor: SchemaFields.getColorField({
            label: 'Background Color',
            placeholder: '#000000'
        })
    };
}

Schema.ServiceAdd = new SimpleSchema(_.extend({
    name: SchemaFields.getNameField(),
    password: SchemaFields.getPasswordConfirmationField(),
    passwordConfirmation: SchemaFields.getPasswordField()
}, getFields()));

Schema.ServiceEdit = new SimpleSchema(_.extend({
    name: SchemaFields.getNameField(),
    password: optional(SchemaFields.getPasswordConfirmationField()),
    passwordConfirmation: optional(SchemaFields.getPasswordField())
}, getFields()));
