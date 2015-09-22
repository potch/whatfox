#! /usr/bin/env node

var channel = process.argv.pop();

var request = require('request');
request('http://whats-shipping.herokuapp.com/', function (err, res, body) {
  if (err) {
    console.error(err);
    return;
  }
  var body = JSON.parse(body);
  switch (channel) {
    case 'release':
      console.log(body.release.displayVersion);
      break;
    case 'beta':
      console.log(body.beta.displayVersion);
      break;
    case 'aurora':
      console.log(body.aurora.displayVersion);
      break;
    case 'nightly':
      console.log(body.nightly.displayVersion);
      break;
    default:
      console.log('Release: ', body.release.displayVersion);
      console.log('Beta:    ', body.beta.displayVersion);
      console.log('Aurora:  ', body.aurora.displayVersion);
      console.log('Nightly: ', body.nightly.displayVersion);
  }
});