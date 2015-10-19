Template.adminWebsiteEdit.helpers({
    headerOptions: function () {
        return {
            title: 'Edit website',
            links: [
                {
                    route: Route.WEBSITE_LIST,
                    icon: Icon.WEBSITE,
                    title: 'Websites'
                },
                {
                    active: true,
                    title: 'Edit website'
                }
            ]
        };
    },
    autoformOptions: function () {
        return {
            collection: Collection.Websites,
            schema: Schema.Website,
            id: FormId.ADMIN_WEBSITE_EDIT,
            type: 'update',
            doc: this.website,
            buttonContent: 'Edit website'
        };
    }
});
