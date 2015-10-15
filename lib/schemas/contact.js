/**
 * Created by jitrixis on 15/10/2015.
 */
Schema.Contact = new SimpleSchema({
    lastName: {
        type: String,
        autoform: {
            label: 'Last Name',
            placeholder: 'Doe'
        }
    },
    firstName: {
        type: String,
        autoform: {
            label: 'First Name',
            placeholder: 'John'
        }
    },
    email: {
        type: String,
        autoform: {
            label: 'Email',
            placeholder: 'john.doe@smaltcreation.com',
            afFieldInput: {
                type: "email"
            }
        }
    },
    phone: {
        type: String,
        autoform: {
            label: 'Phone',
            placeholder: '+33 (0)123456789'
        }
    }
});
