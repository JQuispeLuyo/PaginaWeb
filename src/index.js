//Imports
const express = require('express');
const app = express();
const path = require('path');

//Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'view'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//static files

//routers
app.use(require('./routes/'));

//Listen the Server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});