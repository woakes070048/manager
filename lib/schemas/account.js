Schema.Account = new SimpleSchema({
    name: SchemaFields.getNameField(),
    nic: SchemaFields.getNicField(),
    email: SchemaFields.getEmailField()
});
