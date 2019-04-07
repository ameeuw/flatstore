/**
 * @file flatstore.ts
 * @author Arne Meeuw <arne.meeuw@gmail.com>
 * @version 0.1
 */

import fs from 'fs-extra'
import { join } from 'path'
import { factory } from "./logging"
const log = factory.getLogger("flatstore")

export interface flatstoreConfig {
  file?: string
  directory?: string
  template?: object
}

export class Flatstore {
  private file: string
  private directory: string
  private _store: object
  public template: object

  constructor(
    private config: flatstoreConfig
  ) {
    this.file = config.file || 'store.json'
    this.directory = config.directory || './'
    this.template = config.template || {}
  }

  public loadStore():any {
    try {
      this.store = JSON.parse(fs.readFileSync(join(this.directory, this.file), { encoding: 'utf8' }))
      return this.store
    } catch(err) {
      log.info(`No store found in "${join(this.directory, this.file)}".`)
      return this.createStore()
    }
  }

  public saveStore() {
    fs.mkdirpSync(this.directory)
    log.info(`Saving store to "${join(this.directory, this.file)}".`)
    return fs.writeFileSync(join(this.directory, this.file), JSON.stringify(this.store,null,2))
  }

  private createStore () {
    log.info(`Creating new store in "${join(this.directory, this.file)}".`)
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
