Template.adminLayoutSidebar.helpers({
    items: function () {
        return [
            {
                name: 'dashboard',
                icon: Icon.DASHBOARD,
                title: 'Dashboard',
                route: 'adminDashboard'
            },
            {
                name: 'websites',
                icon: Icon.WEBSITE,
                title: 'Websites',
                route: Route.WEBSITE_LIST
            },
            {
                name: 'estimates',
                icon: Icon.ESTIMATE,
                title: 'Estimates',
                route: Route.ESTIMATE_LIST
            },
            {
                name: 'invoices',
                icon: Icon.INVOICE,
                title: 'Invoices',
                route: Route.INVOICE_LIST
            },
            {
                name: 'contacts',
                icon: Icon.CONTACT,
                title: 'Contacts',
                route: Route.CONTACT_LIST
            },
            {
                name: 'documents',
                icon: Icon.DOCUMENT,
                title: 'Documents',
                route: Route.DOCUMENT_LIST
            },
            {
                name: 'users',
                icon: Icon.USER,
                title: 'Users',
                route: Route.USER_LIST
            },
            {
                name: 'services',
                icon: Icon.SERVICE,
                title: 'Services',
                route: Route.SERVICE_LIST
            },
            {
                name: 'logs',
                icon: Icon.LOG,
                title: 'Logs',
                route: Route.LOG_LIST
            }
        ];
    },
    isActiveNavigation: function (item) {
        var currentRoute = Router.current().route;
        if(item.hasOwnProperty('name') && currentRoute.options.hasOwnProperty("sidebarNavigation")){
            if(item.name == currentRoute.options.sidebarNavigation){
                return "active";
            }
        }else{
            if(currentRoute.getName() == item.route){
                return "active";
            }
        }
        return "";
    }
});
