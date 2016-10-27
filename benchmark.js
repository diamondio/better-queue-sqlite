var test = require('better-queue-store-test');
var uuid = require('node-uuid');
var Sql = require('.');


// Test 1: No options
test.benchmark('Sqlite', {
  create: function (cb) {
    cb(null, new Sql({path: './sqlite_test' + uuid.v4()}));
  },
  destroy: function (cb) { cb() }, // Pass
  numItems: 20000,
}, function (err) {
  if (err) console.log ('Looks like there was an error', err);
  process.exit(0);
});
