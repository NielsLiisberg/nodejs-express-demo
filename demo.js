const express = require('express')
const app = express()
const port = 8899;

const db2 = require('./db2');

db2.connect();

// Test like http://dksrv131:8899/list_users_by_view
app.get('/list_users_by_view', async (req, res) => {
  const resultSet = await db2.executeStatement(
    'select * from microdemo.users_full'
  );
  res.json(resultSet);
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
