Template.adminContactListOptions.events({
    'click #remove': function (event, template) {
        swal({
            title: 'Are you sure?',
            text: 'This contact will be removed.',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, remove it!',
            confirmButtonColor: Configuration.COLOR.DANGER,
            closeOnConfirm: false
        }, function (remove) {
            if (remove) {
                Collection.Contacts.remove(template.data._id);

                swal({
                    title: 'Contact removed!',
                    text: 'This contact has been successfully removed.',
                    type: 'success'
                });
            }
        });
    }
});