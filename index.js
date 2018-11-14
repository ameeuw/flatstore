let fs = require('fs')
let { join } = require('path')

module.exports = function(opts={}) {
  let file = opts.file || './store.json'
  let template = opts.template || {}

  let appMethods = {
    loadStore: function() {
      try {
        store = JSON.parse(fs.readFileSync(file).toString())
        return store
      } catch(err) {
        console.log("No store found...")
        return this.createStore()
      }
    },

    saveStore: function(filename=file) {
      return new Promise( (resolve, reject) => {
        fs.writeFile(filename, JSON.stringify(store,null,2), function(err) {
          if(err) {
            console.log(err)
            reject({'error': err})
          }
          console.log(`Written store to: ${filename}`)
          resolve(store)
        })
      })
    },

    createStore: function() {
      console.log("Creating new store...")
      store = template
      this.saveStore()
      return store
    }
  }

  return appMethods
}
