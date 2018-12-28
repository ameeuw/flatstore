let Flatstore = require('../index')

let flatOpts0 = {
  file: "./flatstore0.json",
  template: {
    "option0": 0,
    "option1": 0
  }
}
let flatstore0 = new Flatstore(flatOpts0)
let store0 = flatstore0.loadStore()

let flatOpts1 = {
  file: "./flatstore1.json",
  template: {
    "option2": 0,
    "option3": 0
  }
}
let flatstore1 = new Flatstore(flatOpts1)
let store1 = flatstore1.loadStore()

store0.option0 = 1
flatstore1.saveStore()


store1.option2 = 1
flatstore0.saveStore()
