const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', { 
        title: 'Home' 
    });
})

router.get('/about', (req, res, next) => {
    res.render('about', { 
        title: 'About' 
    });
})

router.get('/projects', (req, res, next) => {
    res.render('projects', {
        title: 'Projects'
    });
})

module.exports = router