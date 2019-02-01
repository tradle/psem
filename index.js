
const { EventEmitter } = require('events')
const Promise = require('any-promise')
const RESOLVED = Promise.resolve()

module.exports = () => {
  let open

  const ee = new EventEmitter()
  ee.on('stop', () => open = false)
  ee.on('go', () => open = true)

  const go = () => {
    ee.emit('go')
    return api
  }

  const stop = () => {
    ee.emit('stop')
    return api
  }

  const wait = () => {
    if (open) return RESOLVED

    return new Promise(resolve => ee.once('go', resolve))
  }

  const api = { stop, go, wait }
  return api
}
