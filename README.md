### Simple FlatFile store for parameter saving

This module provides a simple API to create, load and save object storage in JSON format.

## API

Create a store providing a filename and template with standard values
```javascript
let opts = {
  file: "./prices.json",
  template: {
    "buyPrice": 2100,
    "sellPrice": 900
  }
}

let flatstore = require('flatstore')(opts)
```


Load the store object to be available to your application - if no file is found, a new store is created using the provided template
```javascript
let store = flatstore.loadStore()
```

Manipulate the store to your needs and save to file whenever you make changes
```javascript
store.sellPrice = 1337
await flatstore.saveStore()
```
