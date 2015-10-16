SweetAlert = {
    openRemoveAlert: function (options) {
        swal({
            title: 'Are you sure?',
            text: options.askText,
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, remove it!',
            confirmButtonColor: Configuration.COLOR.DANGER
        }, function (confirmed) {
            if (confirmed) {
                options.collection.remove(options.id);

                if (_.has(options, 'callback')) {
                    options.callback();
                }

                Bert.alert({
                    title: options.confirmTitle,
                    message: options.confirmText,
                    type: 'success'
                });
            }
        });
    }
};
