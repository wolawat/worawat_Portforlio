const express = require( 'express'); 
const router = express. Router();
const myData = require('../data')

router.get('/',(req,res)=>{
    res.render('index',{myData});
});

/*router.get('/',(req, res )=>{
res.send( "<h1>My Portfolio</h1>");
});*/

router.get('/aboutme', (req, res )=>{
    res.render('about',{myData});
});

router.get('/education', (req,res )=>{
    res.render('education',{myData});
});

router.get('/workexperience',(req, res )=>{
    res.render('experience',{myData});
});

router.get('/skill', (req, res )=>{
    res.render('skill',{myData});
});

router.get('/contact', (req, res )=>{
    res.render('contact',{myData});
});
module.exports = router;
