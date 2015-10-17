Template.adminLayoutNavbar.events({
    'click [data-toggle="offcanvas"]': function (event) {
        event.preventDefault();

        var screenSizes = $.AdminLTE.options.screenSizes;
        var body = $('body');

        // Enable sidebar push menu
        if ($(window).width() > (screenSizes.sm - 1)) {
            body.toggleClass('sidebar-collapse');
        }

        // Handle sidebar push menu for small screens
        else {
            if (body.hasClass('sidebar-open')) {
                BodyClass.remove('sidebar-open sidebar-collapse');
            } else {
                BodyClass.add('sidebar-open');
            }
        }
    },
    'click [data-toggle="control-sidebar"]': function (event) {
        event.preventDefault();

        $('body')
            .find('.control-sidebar:first')
            .toggleClass('control-sidebar-open');
    }
});