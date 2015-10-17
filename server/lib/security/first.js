Security.defineMethod('ifIsNotFirst', {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId, doc) {
        return SecurityMethod.isFirst(doc);
    }
});
