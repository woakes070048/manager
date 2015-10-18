SchemaFields = {
    getPasswordField: function () {
        return {
            type: String,
            min: 12,
            autoform: {
                type: 'password',
                label: 'Password',
                placeholder: 'At least 12 characters'
            }
        };
    },
    getPasswordConfirmationField: function () {
        return {
            type: String,
            min: 12,
            autoform: {
                type: 'password',
                label: 'Password Confirmation',
                placeholder: 'At least 12 characters'
            },
            custom: function () {
                if (this.value !== this.field('password').value) {
                    return 'passwordMismatch';
                }
            }
        };
    },
    getEmailField: function () {
        return {
            type: String,
            regEx: SimpleSchema.RegEx.Email,
            autoform: {
                type: 'email',
                label: 'Email',
                placeholder: 'jdoe@smaltcreation.com'
            }
        };
    },
    getPhoneField: function () {
        return {
            type: String,
            autoform: {
                id: 'autoform-input-phone',
                type: 'intl-tel',
                class: 'form-control',
                intlTelOptions: {
                    autoFormat: true,
                    defaultCountry: Configuration.DEFAULT_COUNTRY,
                    utilsScript: 'lib/libphonenumber/build/utils.js'
                }
            },
            custom: function () {
                if (!$('#autoform-input-phone').intlTelInput('isValidNumber')) {
                    return 'phoneInvalid';
                }
            }
        };
    },
    getNameField: function () {
        return {
            type: String,
            autoform: {
                label: 'Name',
                placeholder: 'Smalt Création'
            }
        };
    },
    getLastNameField: function () {
        return {
            type: String,
            autoform: {
                label: 'Last Name',
                placeholder: 'Doe'
            }
        };
    },
    getFirstNameField: function () {
        return {
            type: String,
            autoform: {
                label: 'First Name',
                placeholder: 'John'
            }
        };
    },
    getColorField: function (options) {
        return {
            type: String,
            autoform: _.extend(options, {
                type: 'bootstrap-minicolors'
            })
        };
    },
    getUrlField: function () {
        return {
            type: String,
            regEx: SimpleSchema.RegEx.Url,
            autoform: {
                label: 'Address',
                placeholder: 'https://www.smaltcreation.com'
            }
        };
    }
};
