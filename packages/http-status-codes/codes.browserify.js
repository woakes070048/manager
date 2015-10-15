HttpStatusCodes = Meteor.isServer
    ? Npm.require('http-status-codes')
    : require('http-status-codes');
