Template.adminLayoutSidebar.helpers({
    items: function () {
        return [
            {
                icon: Icon.DASHBOARD,
                title: 'Dashboard',
                route: 'adminDashboard'
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
                icon: Icon.LOG,
                title: 'Logs',
                route: Route.LOG_LIST
            }
        ];
    }
});
