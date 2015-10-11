var name = 'guest-layout';

Template.guestLayout.onRendered(function () {
    BodyClass.add(name);
});

Template.guestLayout.onDestroyed(function () {
    BodyClass.remove(name);
});
