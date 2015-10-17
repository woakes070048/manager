var ovh = Meteor.npmRequire('ovh')({
    endpoint: 'ovh-eu',
    appKey: Meteor.settings.ovh.key,
    appSecret: Meteor.settings.ovh.secret,
    consumerKey: Meteor.settings.ovh.consumer
});
