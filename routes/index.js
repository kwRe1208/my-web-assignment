/*
Student ID: 301363058
Student Name: Yu Kwan Wong
File Name: index.js
*/

const express = require('express');
const router = express.Router();

const logoOrigin = '/images/logo_origin-removebg-preview.png';

router.get('/', (req, res, next) => {
    const cssPath = '/css/styleHome.css';
    res.render('index', { 
        title: 'Home' ,
        logoOrigin: logoOrigin,
        cssPath: cssPath,
        scriptPath: ''
    });
})

router.get('/about', (req, res, next) => {
    const cssPath = '/css/styleAbout.css';
    const myPhoto = '/images/my_photo.jpg';
    const collegeImg = '/images/centennial_college.png';
    const koaImg = '/images/koa.webp';
    const kddiImg  = '/images/kddi.png';
    const mufjImg = '/images/mitsubishi.png';
    const comuilinkImg = '/images/communilink.jpg';
    res.render('about', { 
        title: 'About' ,
        logoOrigin: logoOrigin,
        myPhoto: myPhoto,
        collegeImg: collegeImg,
        koaImg: koaImg,
        kddiImg: kddiImg,
        mufjImg: mufjImg,
        comuilinkImg: comuilinkImg,
        cssPath: cssPath,
        scriptPath: ''
    });
})

router.get('/projects', (req, res, next) => {
    const projects = [
        { 
            title: "UIPath Automation", 
            description: "Implement automation workflows using UIPath to minimize manual interventions by the staff. Initiatives include developing a flow for automatic invoice generation and a process to download Purchase Orders (PO) directly from the customer portal.", 
            imageUrl: "/images/uipath.png"
    },
        { 
            title: "Python Automation Reporting", 
            description: "Retrieve data from specified databases and construct detailed reports utilizing Python. Key libraries to be employed include Pandas, Numpy, and Matplotlib for data manipulation, analysis, and visualization.",
            imageUrl: "/images/python.png"
    },
        { 
            title: "Power Apps Development", 
            description: "Develop applications using Power Apps tailored for organizational staff needs. This includes applications for recording meeting minutes, generating training reports, and other functionalities as required.",
            imageUrl: "/images/powerapps.png"
    },
        { 
        title: "Cloud Migration", 
        description: "Initiate a comprehensive project to transition client servers from an on-premises environment to the Amazon Web Services (AWS) Cloud platform.",
        imageUrl: "/images/migration.png"
    },
        { 
        title: "O365 Migration", 
        description: "Oversee the transition and migration of email systems to the Office 365 platform to enhance communication efficiency and integration within the organization.",
        imageUrl: "/images/m365.png"
    },
    ];
    const cssPath = '/css/styleProjects.css';

    res.render('projects', {
        title: 'Projects',
        logoOrigin: logoOrigin,
        cssPath: cssPath,
        projects: projects,
        scriptPath: ''
    });
})

router.get('/services', (req, res, next) => {
    const services = [
        { title: 'Python Programming', description: 'Offering end-to-end Python development services for automation, data analysis, and web applications.' },
        { title: 'Power Platform Development', description: 'Custom solutions using Microsoft Power Platform to streamline business processes and enhance productivity.' },
        { title: 'Networking', description: 'Design, implementation, and management of robust network infrastructures for optimal connectivity and performance.' },
        { title: 'Solutions Architecture', description: 'Crafting efficient and scalable technical architectures that align with business goals and technology trends.' },
        { title: 'Client / Server side Troubleshooting', description: 'Expert diagnostic and resolution services for both client and server-side issues, ensuring smooth IT operations.' },
    ];
    const cssPath = '/css/styleServices.css';

    res.render('services', {
        title: 'Services',
        logoOrigin: logoOrigin,
        cssPath: cssPath,
        services: services,
        scriptPath: ''
    });
})

router.get('/contact', (req, res, next) => {
    const scriptPath = '/js/contact.js';
    res.render('contact', {
        title: 'Contact',
        logoOrigin: logoOrigin,
        cssPath: '/css/styleContact.css',
        scriptPath: scriptPath
    });
})

router.post('/submit', (req, res) => {
    //Form data
    const { name, email, message } = req.body;


    //Send a response
    res.send("Hi " + name +  "<p>Form submitted successfully! </p><p>Back to home in 5 seconds</p> \
    <script> \
        setTimeout(function() { \
            window.location.href = '/'; \
        }, 5000);  // Redirect after 5 seconds \
    </script>"
    );
    
});

module.exports = router