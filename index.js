let fs = require('fs')

class Flatstore {
  constructor (opts={}) {
    this.file = opts.file || './store.json'
    this.template = opts.template || {}
  }

  loadStore () {
    try {
      this.store = JSON.parse(fs.readFileSync(this.file).toString())
      return this.store
    } catch(err) {
      console.log("No store found...")
      return this.createStore()
    }
  }

  saveStore () {
    let that = this
    return new Promise( (resolve, reject) => {
      fs.writeFile(this.file, JSON.stringify(this.store,null,2), function(err) {
        if(err) {
          console.log(err)
          reject({'error': err})
        }
        console.log(`Written store to: ${that.file}`)
        resolve(that.store)
      })
    })
  }

  createStore () {
    console.log("Creating new store...")
    this.store = this.template
    this.saveStore()
    return this.store
  }

  get store () {
    return this._store
  }

  set store (value) {
    this._store = value
  }
}

module.exports = Flatstore
