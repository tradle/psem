
const test = require('tape')
const co = require('co')
const createSemaphore = require('./')

test('basic', co.wrap(function* (t) {
  const sem = createSemaphore().go()
  // stopped initially
  yield sem.wait()
  sem.stop()

  let waited
  setTimeout(sem.go, 100)
  setTimeout(() => waited = true, 50)
  yield sem.wait()
  t.ok(waited)

  t.end()
}))
