const app = require('./server')

const ds = app.dataSources.db
const tables = [
  'MyUser'
]

ds.autoupdate(tables, (err) => {
  const name = ds.adapter.name

  console.log(`working in ${name}`)
  console.log('error', err)
  if (err) throw err

  console.log(`${name} updated`)

  ds.disconnect()

  process.exit()
})
