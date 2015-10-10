var name = 'login-page';

Template.guestLogin.onRendered(function () {
    BodyClass.add(name);

    // Checkboxes
    $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%'
    });
});

Template.guestLogin.events({
    'submit form': function (event) {
        event.preventDefault();

        var email = $('#email').val();
        var password = $('#password').val();

        if (!email || !password) {
            return false;
        }

        Meteor.loginWithPassword(email, password, function (error) {
            if (error) {
                swal({
                    type: 'error',
                    title: error.reason
                });
            }
        });
    }
});

Template.guestLogin.onDestroyed(function () {
    BodyClass.remove(name);
});
