Schema.Website = new SimpleSchema({
    name: SchemaFields.getNameField(),
    address: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        autoform: {
            label: 'Address',
            placeholder: 'https://www.smaltcreation.com'
        }
    },
    attempts: {
        type: Number,
        min: 1,
        max: 10,
        autoform: {
            label: 'Attempts',
            placeholder: 5
        }
    },
    validCodes: {
        type: [Number],
        autoform: {
            type: 'select2',
            options: Select.getWebsiteValidCodesOptions,
            multiple: true,
            label: 'Valid HTTP Status Codes',
            select2Options: {
                placeholder: Select.getWebsiteValidCodesOptionLabel(HttpStatusCodes.OK)
            }
        }
    }
});
