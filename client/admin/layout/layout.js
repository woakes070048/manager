Template.adminLayout.onCreated(function () {
    BodyClass.add('sidebar-mini skin-' + Configuration.LTE.SKIN);
});

Template.adminLayout.events({
    'click .content-wrapper': function () {
        // Enable hide menu when clicking on the content-wrapper on small screens
        var screenSizes = $.AdminLTE.options.screenSizes;
        var body = $('body');

        if ($(window).width() <= screenSizes.sm - 1 && body.hasClass('sidebar-open')) {
            body.removeClass('sidebar-open');
        }
    }
});
