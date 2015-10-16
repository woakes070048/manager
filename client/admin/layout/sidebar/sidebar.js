Template.adminLayoutSidebar.helpers({
    items: function () {
        return [
            {
                icon: 'tachometer',
                title: 'Dashboard',
                route: 'adminDashboard'
            },
            {
                icon: 'globe',
                title: 'Websites',
                route: 'adminWebsiteList'
            },
            {
                icon: 'file-text',
                title: 'Estimates',
                route: 'adminEstimateList'
            },
            {
                icon: 'money',
                title: 'Invoices',
                route: 'adminInvoiceList'
            },
            {
                icon: 'suitcase',
                title: 'Contacts',
                route: 'adminContactList'
            },
            {
                icon: 'file',
                title: 'Documents',
                route: 'adminDocumentsList'
            },
            {
                icon: 'user',
                title: 'Users',
                route: 'adminUserList'
            },
            {
                icon: 'exchange',
                title: 'Services',
                route: 'adminServiceList'
            },
            {
                icon: 'history',
                title: 'Logs',
                route: 'adminLogList'
            }
        ];
    }
});
