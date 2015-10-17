Template.adminLayoutSidebar.helpers({
    items: function () {
        return [
            {
                icon: Icon.DASHBOARD,
                title: 'Dashboard',
                route: 'adminDashboard',
                activeRegex: '^adminDashboard'
            },
            {
                icon: Icon.WEBSITE,
                title: 'Websites',
                route: Route.WEBSITE_LIST,
                activeRegex: '^adminWebsite'
            },
            {
                icon: Icon.ESTIMATE,
                title: 'Estimates',
                route: Route.ESTIMATE_LIST,
                activeRegex: '^adminEstimate'
            },
            {
                icon: Icon.INVOICE,
                title: 'Invoices',
                route: Route.INVOICE_LIST,
                activeRegex: '^adminInvoice'
            },
            {
                icon: Icon.CONTACT,
                title: 'Contacts',
                route: Route.CONTACT_LIST,
                activeRegex: '^adminContact'
            },
            {
                icon: Icon.DOCUMENT,
                title: 'Documents',
                route: Route.DOCUMENT_LIST,
                activeRegex: '^adminDocument'
            },
            {
                icon: Icon.USER,
                title: 'Users',
                route: Route.USER_LIST,
                activeRegex: '^adminUser'
            },
            {
                icon: Icon.SERVICE,
                title: 'Services',
                route: Route.SERVICE_LIST,
                activeRegex: '^adminService'
            },
            {
                icon: Icon.LOG,
                title: 'Logs',
                route: Route.LOG_LIST,
                activeRegex: '^adminLog'
            }
        ];
    }
});
