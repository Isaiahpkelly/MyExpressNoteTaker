const express = require('express')
const app = express()
const path = require('path')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));


const apiRoutes = require("./routes/apiRoutes")(app);
const htmlRoutes = require("./routes/htmlRoutes")(app);



PORT = 3005;



app.listen(PORT, console.log(`Server is listening on port: ${PORT}`))