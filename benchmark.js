var test = require('better-queue-store-test');

var Sql = require('.');


// Test 1: No options
test.benchmark('Sqlite', {
  create: function (cb) {
    cb(null, new Sql());
  },
  destroy: function (cb) { cb() }, // Pass
  numItems: 200000,
}, function (err) {
  if (err) console.log ('Looks like there was an error', err);
  process.exit(0);
});
