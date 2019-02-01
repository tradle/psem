# psem

simple promise-based semaphore

## Install

```
npm install
```

## Usage

```js
const { go, stop, wait } = createSemaphore()

let waited
setTimeout(go, 100)
setTimeout(() => waited = true, 50)
wait().then(() => console.log('waited', waited))
```
