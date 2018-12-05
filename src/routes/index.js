const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '/view/index.html'));
    res.render('index.html', { title: 'Home' });
});

router.get('/contact', (req, res) => {
    //res.sendFile(path.join(__dirname, '/view/index.html'));
    res.render('contact.html', { title: 'Contact Page' });
});
module.exports = router;