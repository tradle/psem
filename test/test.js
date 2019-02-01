
const test = require('tape')
const createSemaphore = require('./')

test('basic', async t => {
  const { go, stop, wait } = createSemaphore()
  go()

  await wait()
  stop()

  let waited
  setTimeout(go, 100)
  setTimeout(() => waited = true, 50)
  await wait()
  t.ok(waited)

  t.end()
})
