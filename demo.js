// Required components
const express = require('express')
const db2 = require('./db2')

// Initialize components and constants
const app = express()
db2.connect()
const port = 8899

// Setup endpoints

// Test like http://MY_IBM_I:8899/list_users_by_view
app.get('/list_users_by_view', async (req, res) => {
  const resultSet = await db2.executeStatement(
    'select * from microdemo.users_full'
  )
  res.json(resultSet)
})

// Test like http://MY_IBM_I:8899/list_users_by_procedure
// Or   like http://MY_IBM_I:8899/list_users_by_procedure?search=ard
app.get('/list_users_by_procedure', async (req, res) => {
  const search = req.query.search ? req.query.search :'' 
  const resultSet = await db2.executeStatement(
    `call microdemo.user_list ( search  => '${search}')`
  )
  res.json(resultSet)
})

// Start the application
app.listen(port, () => console.log(`Listening on port ${port}!`))
