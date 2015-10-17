Template.componentNotFound.helpers({
    headerOptions: function () {
        return {
            title: 'Page not found',
            links: [
                {
                    icon: Icon.DASHBOARD,
                    title: 'Dashboard',
                    route: Route.DASHBOARD
                }, {
                    active: true,
                    title: 'Page not found'
                }
            ]
        };
    }
});

Template.componentNotFound.onRendered(function () {
    BodyClass.add('no-sidebar');
});
