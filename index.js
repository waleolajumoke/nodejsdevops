// create an express application
const express = require('express');
const app = express();


// create a port
const port = 3000;

// create a route
app.get('/', (req, res) => {
  res.send('Wecome to DevOps Class')

})

// show message in the console
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



