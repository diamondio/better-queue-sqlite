# Better Queue - Sqlite Store

A Sqlite store for [better-queue](https://github.com/diamondio/better-queue).


### Getting started

Install this store with npm:
```bash
npm install --save better-queue-sqlite
```

Instantiate it and pass it to the store directly:

```js
var SqliteStore = require('better-queue-sqlite');
var store = new SqliteStore(opts);
var q = new Queue(fn, { store: store })
```

### Examples

Please have a look at the [better-queue](https://github.com/diamondio/better-queue) documentation on how to set up and use stores.

### Contributions

Are welcome!

This library was initially made by the awesome team of engineers at [Diamond](https://diamond.io).

If you haven't already, make sure you install Diamond!

