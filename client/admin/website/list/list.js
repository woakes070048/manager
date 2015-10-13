Template.adminWebsiteList.helpers({
    headerOptions: function () {
        return {
            title: 'Websites',
            links: [
                {
                    active: true,
                    icon: 'globe',
                    title: 'Websites'
                }
            ]
        };
    },
    actionsOptions: function () {
        return {
            links: [
                {
                    type: 'primary',
                    icon: 'plus',
                    title: 'Add new website',
                    route: 'adminWebsiteAdd'
                }
            ]
        };
    }
});
