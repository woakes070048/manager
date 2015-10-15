Template.adminWebsiteListOptions.events({
    'click #remove': function (event, template) {
        swal({
            title: 'Are you sure?',
            text: 'This website will be removed.',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, remove it!',
            confirmButtonColor: Configuration.COLOR.DANGER,
            closeOnConfirm: false
        }, function (remove) {
            if (remove) {
                Collection.Websites.remove(template.data._id);

                swal({
                    title: 'Website removed!',
                    text: 'The website has been successfully removed.',
                    type: 'success'
                });
            }
        });
    }
});
