function getFields () {
    return {
        lastName: SchemaFields.getLastNameField(),
        firstName: SchemaFields.getFirstNameField(),
        email: SchemaFields.getEmailField(),
        phone: SchemaFields.getPhoneField(),
        roles: {
            type: [String],
            autoform: {
                type: 'select2',
                options: Select.getUserRolesOptions,
                multiple: true,
                label: 'Roles',
                select2Options: {
                    placeholder: Select.getUserRolesOptionLabel(Role.ADMIN)
                }
            }
        }
    };
}

Schema.UserAdd = new SimpleSchema(_.extend(getFields(), {
    password: SchemaFields.getPasswordConfirmationField(),
    passwordConfirmation: SchemaFields.getPasswordField()
}));

Schema.UserEdit = new SimpleSchema(_.extend(getFields(), {
    password: optional(SchemaFields.getPasswordConfirmationField()),
    passwordConfirmation: optional(SchemaFields.getPasswordField())
}));
