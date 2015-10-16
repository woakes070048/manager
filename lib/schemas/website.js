Schema.Website = new SimpleSchema({
    name: {
        type: String,
        autoform: {
            label: 'Name',
            placeholder: 'Smalt Création'
        }
    },
    address: {
        type: String,
        autoform: {
            label: 'Address',
            placeholder: 'https://www.smaltcreation.com'
        }
    },
    attempts: {
        type: Number,
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
                placeholder: 200
            }
        }
    }
});
