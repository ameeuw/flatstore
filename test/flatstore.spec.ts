import { Flatstore, flatstoreConfig } from '../src/flatstore'

let flatConfig0:flatstoreConfig = {
  file: "flatstore0.json",
  directory: "data/0",
  template: {
    "option0": 0,
    "option1": 0
  }
}
let flatstore0 = new Flatstore(flatConfig0)
let store0 = flatstore0.loadStore()

let flatConfig1:flatstoreConfig = {
  file: "flatstore1.json",
  directory: "data/1",
  template: {
    "option2": 0,
    "option3": 0
  }
}
let flatstore1 = new Flatstore(flatConfig1)
let store1 = flatstore1.loadStore()

store0.option0 = 1
flatstore1.saveStore()


store1.option2 = 1
flatstore0.saveStore()
