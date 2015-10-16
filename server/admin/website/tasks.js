SyncedCron.add({
    name: 'Down checker',
    schedule: function(parser) {
        return parser.text('every 5 minutes');
    },
    job: function() {
        var websites = Collection.Websites.find().fetch();

        websites.forEach(function (website) {
            var responses = [];
            var exceptions = [];

            for (var i = 0; i < website.attempts; i++) {
                try {
                    var response = HTTP.get(website.address);

                    if (!_.contains(website.validCodes, response.statusCode)) {
                        responses.push({
                            date: new Date(),
                            statusCode: response.statusCode
                        });
                    }
                } catch (exception) {
                    if (!_.has(exception, 'response')) {
                        exceptions.push({
                            date: new Date(),
                            response: exception.toString()
                        });
                    }  else {
                        exceptions.push(_.extend(exception, {
                            date: new Date()
                        }));
                    }
                }
            }

            if (responses.length || exceptions.length) {
                log({
                    level: LogLevel.EMERGENCY,
                    tags: [LogTag.WEBSITES],
                    message: [website.name, 'seems to be down'].join(' '),
                    details: {
                        website: _.pick(website, [
                            'id',
                            'address',
                            'attempts',
                            'validCodes'
                        ]),
                        responses: responses,
                        exceptions: exceptions
                    }
                });
            }
        });
    }
});