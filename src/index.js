//Imports
const express = require('express');
const app = express();
const path = require('path');

//Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

//routers
app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '/view/index.html'));
    res.render('index.ejs', { title: 'first web site' });

    //console.log();
});

//Listen the Server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});