log = function(values) {
    if (!_.has(values, 'service')) {
        values.service = Configuration.DEFAULT_SERVICE.NAME;
    }

    if (!_.has(values, 'details')) {
        values.details = null;
    }

    var service = Meteor.users.findOne({
        username: values.service
    });

    var tags = _.uniq(values.tags);
    var existingTags = Collection.Tags.find({
        name: {
            $in: tags
        }
    }).fetch();

    _.each(existingTags, function (tag) {
        tags.splice(tags.indexOf(tag.name), 1);
    });

    _.each(tags, function (name) {
        Collection.Tags.insert({
            name: name
        });
    });

    return Collection.Logs.insert({
        service:    service._id,
        level:      values.level,
        message:    values.message,
        tags:       values.tags,
        details:    values.details
    });
};
