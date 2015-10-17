Template.adminLayoutSidebar.helpers({
    items: function () {
        return [
            {
                name: 'dashboard',
                icon: 'tachometer',
                title: 'Dashboard',
                route: 'adminDashboard'
            },
            {
                name: 'websites',
                icon: 'globe',
                title: 'Websites',
                route: 'adminWebsiteList'
            },
            {
                name: 'estimates',
                icon: 'file-text',
                title: 'Estimates',
                route: 'adminEstimateList'
            },
            {
                name: 'invoices',
                icon: 'money',
                title: 'Invoices',
                route: 'adminInvoiceList'
            },
            {
                name: 'contacts',
                icon: 'suitcase',
                title: 'Contacts',
                route: 'adminContactList'
            },
            {
                name: 'documents',
                icon: 'file',
                title: 'Documents',
                route: 'adminDocumentsList'
            },
            {
                name: 'users',
                icon: 'user',
                title: 'Users',
                route: 'adminUserList'
            },
            {
                name: 'services',
                icon: 'exchange',
                title: 'Services',
                route: 'adminServiceList'
            },
            {
                name: 'logs',
                icon: 'history',
                title: 'Logs',
                route: 'adminLogList'
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
