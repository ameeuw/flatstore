let fs = require('fs')

class Flatstore {
  constructor (opts={}) {
    this.file = opts.file || './store.json'
    this.template = opts.template || {}
  }

  loadStore () {
    try {
      this.store = JSON.parse(fs.readFileSync(file).toString())
      return this.store
    } catch(err) {
      console.log("No store found...")
      return this.createStore()
    }
  }

  saveStore () {
    return new Promise( (resolve, reject) => {
      fs.writeFile(this.filename, JSON.stringify(this.store,null,2), function(err) {
        if(err) {
          console.log(err)
          reject({'error': err})
        }
        console.log(`Written store to: ${this.filename}`)
        resolve(this.store)
      })
    })
  }

  createStore () {
    console.log("Creating new store...")
    this.store = template
    this.saveStore()
    return this.store
  }

  get store () {
    return this.store
  }
}

module.exports = Flatstore
