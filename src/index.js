//Imports
const express = require('express');
const app = express();

//Settings
app.set('port', 3000);

//routers
app.get('/', (req, res) => {
    res.send('Hello word :D');
});

//Listen the Server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});