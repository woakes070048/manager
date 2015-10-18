Schema.Password = new SimpleSchema({
    name: SchemaFields.getNameField(),
    username: {
        type: String,
        autoform: {
            label: 'User Name',
            placeholder: 'contact@smaltcreation.com'
        }
    },
    password: {
        type: String,
        autoform: {
            type: 'password',
            label: 'Password'
        }
    },
    address: optional(SchemaFields.getUrlField())
});
