Schema.Contact = new SimpleSchema({
    lastName: SchemaFields.getLastNameField(),
    firstName: SchemaFields.getFirstNameField(),
    email: SchemaFields.getEmailField(),
    phone: SchemaFields.getPhoneField()
});
