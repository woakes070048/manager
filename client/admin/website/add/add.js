Template.adminWebsiteAdd.helpers({
    headerOptions: function () {
        return {
            title: 'Add new website',
            links: [
                {
                    route: Route.WEBSITE_LIST,
                    icon: Icon.WEBSITE,
                    title: 'Websites'
                },
                {
                    active: true,
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
