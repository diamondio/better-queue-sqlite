var test = require('better-queue-store-test');
var uuid = require('node-uuid');
var Sql = require('.');


// Test 1: No options
test.benchmark('Sqlite', {
  create: function (cb) {
    cb(null, new Sql({path: './sqlite_test' + uuid.v4()}));
  },
  destroy: function (cb) { cb() }, // Pass
  numItems: 200000,
  itemCreator: function (i) {
    return {"_index":"index-57e180a6b1b777940491f3df-fbe511f7-508a-4d85-b4f7-8af2b9e8578c","_type":"item","_id":"asset_b49a8bc5-f45d-44de-be36-e027a0297c27" + i,"_version":1,"found":true,"_source":{"id":"asset_b49a8bc5-f45d-44de-be36-e027a0297c27","_internal_metadata":{"linked_assets":{},"desired_storage_locations":{"98e0a177-f68e-4d2b-9086-2141d956085a":true,"s3":true},"most_recent_accountid":"98e0a177-f68e-4d2b-9086-2141d956085a","storage_locations":{"98e0a177-f68e-4d2b-9086-2141d956085a":{"file_size":171163,"storageDescriptor":{"bucket":"baynet-dev-files","path":"57e180a6b1b777940491f3df/asset_b49a8bc5-f45d-44de-be36-e027a0297c27"},"syncerId":"98e0a177-f68e-4d2b-9086-2141d956085a","md5hash":"5a85d6a602bcaf4e3e4c5f4e2a18be7e"},"s3":{"file_size":171163,"storageDescriptor":{"bucket":"baynet-dev-files","path":"57e180a6b1b777940491f3df/asset_b49a8bc5-f45d-44de-be36-e027a0297c27"},"syncerId":"baynet","md5hash":"5a85d6a602bcaf4e3e4c5f4e2a18be7e"}},"name":"main_asset","synced_locations":{},"type":"asset","linked_items":["98d8fd99-42cc-4ad1-a241-fddd784bce71"]}}}
  }
}, function (err) {
  if (err) console.log ('Looks like there was an error', err);
  process.exit(0);
});
