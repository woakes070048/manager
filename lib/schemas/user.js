var fields = {
    firstName: {
        type: String,
        autoform: {
            label: 'First Name',
            placeholder: 'Anakin'
        }
    },
    lastName: {
        type: String,
        autoform: {
            label: 'Last Name',
            placeholder: 'Skywalker'
        }
    },
    email: {
        type: String,
        autoform: {
            label: 'Email',
            placeholder: 'anakin@skywalker.com'
        }
    },
    phone: {
        type: String,
        autoform: {
            label: 'Phone',
            placeholder: '+33611821806'
        }
    },
    roles: {
        type: [String],
        autoform: {
            type: 'select2',
            options: Select.getUserRolesOptions,
            multiple: true,
            label: 'Roles',
            select2Options: {
                placeholder: 'Admin'
            }
        }
    }
};

var passwordField = {
    type: String,
    min: 12,
    autoform: {
        type: 'password',
        label: 'Password',
        placeholder: 'At least 12 characters'
    }
};

var passwordConfirmationField = {
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

Schema.UserAdd = new SimpleSchema(_.extend(fields, {
    password: passwordField,
    passwordConfirmation: passwordConfirmationField
}));

Schema.UserEdit = new SimpleSchema(_.extend(fields, {
    password: optional(passwordField),
    passwordConfirmation: optional(passwordConfirmationField)
}));
