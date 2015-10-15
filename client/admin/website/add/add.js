Template.adminWebsiteAdd.helpers({
    headerOptions: function () {
        return {
            title: 'Add new website',
            links: [
                {
                    route: 'adminWebsiteList',
                    icon: 'globe',
                    title: 'Websites'
                },
                {
                    current: true,
                    title: 'Add new website'
                }
            ]
        };
    },
    autoformOptions: function () {
        return {
            collection: Collection.Websites,
            schema: Schema.Website,
            id: FormId.ADMIN_WEBSITE_ADD,
            type: 'insert',
            buttonContent: 'Add website'
        };
    }
});
