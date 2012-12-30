var resourceful = require('resourceful');

var Unit = resourceful.define('unit', function() {
  this.use('couchdb', {
    uri: 'http://127.0.0.1:5984',
    database: 'units'
  });

  this.restful = true;

  this.string('name');
  this.string('race');
  this.number('life');
  this.object('armor');
  this.string('movement');
  this.number('cargo_size');
  this.array('attributes');
});

module.exports = Unit;