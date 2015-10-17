Template.adminLayoutSidebar.helpers({
    items: function () {
        return [
            {
                icon: Icon.DASHBOARD,
                title: 'Dashboard',
                route: Route.DASHBOARD
            },
            {
                icon: Icon.WEBSITE,
                title: 'Websites',
                route: Route.WEBSITE_LIST
            },
            {
                icon: Icon.ESTIMATE,
                title: 'Estimates',
                route: Route.ESTIMATE_LIST
            },
            {
                icon: Icon.INVOICE,
                title: 'Invoices',
                route: Route.INVOICE_LIST
            },
            {
                icon: Icon.CONTACT,
                title: 'Contacts',
                route: Route.CONTACT_LIST
            },
            {
                icon: Icon.DOCUMENT,
                title: 'Documents',
                route: Route.DOCUMENT_LIST
            },
            {
                icon: Icon.USER,
                title: 'Users',
                route: Route.USER_LIST
            },
            {
                icon: Icon.SERVICE,
                title: 'Services',
                route: Route.SERVICE_LIST
            },
            {
                icon: Icon.SERVER,
                title: 'Servers',
                route: Route.SERVER_LIST
            },
            {
                icon: Icon.LOG,
                title: 'Logs',
                route: Route.LOG_LIST
            }
        ];
    },
    regex: function () {
        var route = this.route;
        var uppercase = 0;
        var regex = '^';

        for (var i = 0; i < route.length; i++) {
            if (route[i] === route[i].toUpperCase()) {
                uppercase++;
            }

            if (uppercase === 2) {
                break;
            }

            regex += route[i];
        }

        return regex;
    }
});
