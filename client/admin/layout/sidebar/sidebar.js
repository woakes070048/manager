Template.adminLayoutSidebar.onCreated(function () {
    this.utils = new SidebarUtils(this);
});

Template.adminLayoutSidebar.helpers({
    items: function () {
        return [
            {
                title: 'GLOBAL',
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
                title: 'CUSTOMERS',
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
                title: "SYSTEMS",
                type: "header",
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
                title: 'ADMINISTRATION',
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
                    }
                ]
            }
        ];
        /*return [
            {
                title: "Administration",
                type: "header",
                children: [
                    {
                        icon: "cogs",
                        title: "Settings",
                        type: "list",
                        children: [
                            {
                                icon: "users",
                                title: "Users",
                                type: "item",
                                seek: 'self',
                                route: Route.WEBSITE_LIST
                            },
                            {
                                icon: "users",
                                title: "Users",
                                type: "list",
                                children:[
                                    {
                                        icon: "users",
                                        title: "Users2",
                                        type: "item",
                                        seek: 'after'
                                        route: Route.WEBSITE_LIST
                                    },
                                    {
                                        icon: "users",
                                        title: "Users2",
                                        type: "list",
                                        children: [
                                            {
                                                icon: "users",
                                                title: "Users2",
                                                type: "item",
                                                route: Route.WEBSITE_LIST
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                icon: "users",
                                title: "Users",
                                type: "item",
                                regex: "^adminWebsite|adminDashboard"
                                route: Route.WEBSITE_LIST
                            }
                        ]
                    }
                ]
            }
        ];*/
    },
    template: function () {
        return Template.instance().utils.template(this);
    }
});
