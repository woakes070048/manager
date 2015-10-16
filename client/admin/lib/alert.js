SweetAlert = {
    openRemoveAlert: function (options) {
        swal({
            title: 'Are you sure?',
            text: options.askText,
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, remove it!',
            confirmButtonColor: Configuration.COLOR.DANGER,
            closeOnConfirm: false
        }, function (confirmed) {
            if (confirmed) {
                options.collection.remove(options.id);

                if (_.has(options, 'callback')) {
                    options.callback();
                }

                swal({
                    title: options.confirmTitle,
                    text: options.confirmText,
                    type: 'success'
                });
            }
        });
    }
};
