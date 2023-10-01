/*
Student ID: 301363058
Student Name: Yu Kwan Wong
File Name: index.server.controller.js
*/

exports.render = (req,res)=>{
    res.render('index', { 
        title: 'Welcome to Express Application' 
    });
}