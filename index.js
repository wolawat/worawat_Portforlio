const express = require('express');
const router = require('./routes/index');
const hbs = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();



//Template engine setting
app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');

/*app.get('/', (req, res ) => {
    res.send("<h1>My Portfolio</h1>");
});*/

//router
app.use('/profile', router);

//Middleware
app.use(express.static(path.join(__dirname, 'public')));

app.listen(
  PORT,
  () => {
    console.log(`Listening to port ${PORT}`);
  }
);
