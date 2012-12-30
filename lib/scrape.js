var request = require('request'),
  jQuery = require('jquery'),
  jsdom = require('jsdom');

module.exports = function(url, cb) {
  request(url, function(err, res, body) {
    if (!err && res.statusCode == 200) {
      jsdom.env(body, function(err, window) {
        cb(jQuery.create(window));
      });
    }
  });
};