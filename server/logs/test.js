Meteor.startup(function () {
    log({
        message: 'A website seems to be invalid',
        tags: ['down-checker', 'websites'],
        details: {
            website: {
                _id: "jKGmpoW4xLS2hAq6y",
                address: "http://croixrousselive.org/"
            },
            exception: "Error: failed [503]"
        },
        level: LogLevel.ERROR
    });
});
