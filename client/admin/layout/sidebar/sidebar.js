Template.adminLayoutSidebar.onCreated(function () {
    this.utils = new SidebarUtils(this);
});

Template.adminLayoutSidebar.helpers({
    items: function () {
        return [
            {
                title: 'Global',
                type: 'header',
                children: [
                    {
                        icon: Icon.DASHBOARD,
                        title: 'Dashboard',
                        type: 'item',
                        seek: 'self',
                        route: Route.DASHBOARD
                    }
                ]
            },
            {
                title: 'Customers',
                type: 'header',
                children: [
                    {
                        icon: Icon.ESTIMATE,
                        title: 'Estimates',
                        type: 'item',
                        route: Route.ESTIMATE_LIST
                    },
                    {
                        icon: Icon.INVOICE,
                        title: 'Invoices',
                        type: 'item',
                        route: Route.INVOICE_LIST
                    },
                    {
                        icon: Icon.CONTACT,
                        title: 'Contacts',
                        type: 'item',
                        route: Route.CONTACT_LIST
                    },
                    {
                        icon: Icon.DOCUMENT,
                        title: 'Documents',
                        type: 'item',
                        route: Route.DOCUMENT_LIST
                    }
                ]
            },
            {
                title: 'Systems',
                type: 'header',
                children: [
                    {
                        icon: Icon.WEBSITE,
                        title: 'Websites',
                        type: 'item',
                        route: Route.WEBSITE_LIST
                    },
                    {
                        icon: Icon.SERVER,
                        title: 'Servers',
                        type: 'item',
                        route: Route.SERVER_LIST
                    },
                    {
                        icon: Icon.LOG,
                        title: 'Logs',
                        type: 'item',
                        route: Route.LOG_LIST
                    }
                ]
            },
            {
                title: 'Administration',
                type: 'header',
                children: [
                    {
                        icon: Icon.USER,
                        title: 'Users',
                        type: 'item',
                        route: Route.USER_LIST
                    },
                    {
                        icon: Icon.SERVICE,
                        title: 'Services',
                        type: 'item',
                        route: Route.SERVICE_LIST
                    },
                    {
                        icon: Icon.PASSWORD,
                        title: 'Passwords',
                        type: 'item',
                        route: Route.PASSWORD_LIST
                    }
                ]
            }
        ];
    },
    template: function () {
        return Template.instance().utils.template(this);
    }
});
