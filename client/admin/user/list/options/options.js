Template.adminUserListOptions.events({
    'click #remove': function (event, template) {
        swal({
            title: 'Are you sure?',
            text: 'This user will be removed.',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, remove it!',
            confirmButtonColor: Configuration.COLOR.DANGER,
            closeOnConfirm: false
        }, function (remove) {
            if (remove) {
                Meteor.users.remove(template.data._id);

                swal({
                    title: 'User removed!',
                    text: 'The user has been successfully removed.',
                    type: 'success'
                });
            }
        });
    }
});
