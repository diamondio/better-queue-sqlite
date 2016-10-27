var test = require('better-queue-store-test');

var Sqlite = require('../');


test.basic('No options', {
  create: function (cb) {
    cb(null, new Sqlite());
  },
  destroy: function (cb) { cb() } // Pass
});
