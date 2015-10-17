var ovh = Meteor.npmRequire('ovh')({
    endpoint: 'ovh-eu',
    appKey: Meteor.settings.ovh.key,
    appSecret: Meteor.settings.ovh.secret,
    consumerKey: Meteor.settings.ovh.consumer
});

//////////////////////////////////////////////
//     Only use to get new consumer key     //
//////////////////////////////////////////////
//ovh.request('POST', '/auth/credential', { //
//    'accessRules': [                      //
//        { 'method': 'GET', 'path': '/*'}  //
//    ]                                     //
//    }, function (error, credential) {     //
//        console.log(error || credential); //
//});                                       //
//////////////////////////////////////////////

// Service name for Smalt Création VPS1 vps59840.ovh.net
// vps59840.ovh.net used for examples as to change for other VPS

// Get VPS info
// ovh.request('GET', '/vps/vps59840.ovh.net', function (err, vps) {
//   console.log (err || 'Here is your VPS info: ' + vps)
// })

// Get VPS RAM
ovh.request('GET', '/vps/{serviceName}', {
    serviceName: 'vps59840.ovh.net'
}, function (err, vps) {
    console.log (err || 'You have ' + vps.model.memory + ' of RAM')
});

// Get VPS HDD
ovh.request('GET', '/vps/{serviceName}', {
    serviceName: 'vps59840.ovh.net'
}, function (err, vps) {
    console.log (err || 'You have ' + vps.model.disk + ' of HDD')
});

// Get VPS number of CPU
ovh.request('GET', '/vps/{serviceName}', {
    serviceName: 'vps59840.ovh.net'
}, function (err, vps) {
    console.log (err || 'You have ' + vps.model.vcore + ' CPUs')
});

// Get VPS State e.g. running
ovh.request('GET', '/vps/{serviceName}', {
    serviceName: 'vps59840.ovh.net'
}, function (err, vps) {
    console.log (err || 'VPS state: ' + vps.state)
});

// Get VPS OS
ovh.request('GET', '/vps/{serviceName}/distribution', {
    serviceName: 'vps59840.ovh.net'
}, function (err, distribution) {
    console.log (err || 'VPS OS: ' + distribution.distribution)
});

// Monitoring //

// Get VPS cpu:used in MHz
ovh.request('GET', '/vps/{serviceName}/use', {
    serviceName: 'vps59840.ovh.net',
    type: 'cpu:used'
}, function (err, use) {
    console.log (err || 'CPU: ' + use.value + ' Mhz' )
});

// Get ram:used in Mib
ovh.request('GET', '/vps/{serviceName}/use', {
    serviceName: 'vps59840.ovh.net',
    type: 'mem:used'
},function (err, use) {
    console.log (err || 'RAM: ' + use.value + ' Mib' )
});
