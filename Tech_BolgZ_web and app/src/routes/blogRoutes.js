const express = require('express');
const blogRouter = express.Router();

blogRouter.get('/', (req, res) => {
    res.render('home', {
        nav: [
            { link: '/home', title: 'Home' },
            { link: '/posts', title: 'Posts' },
            { link: '/about', title: 'About' },
            { link: '/contact', title: 'Contact' },
        ],
        title: 'Home'
    });
});

blogRouter.get('/home', (req, res) => {
    res.render('home', {
        nav: [
            { link: '/home', title: 'Home' },
            { link: '/posts', title: 'Posts' },
            { link: '/about', title: 'About' },
            { link: '/contact', title: 'Contact' },
        ],
        title: 'Home',
        
    });
});

blogRouter.get('/posts', (req, res) => {
    res.render('post', {
        nav: [
            { link: '/home', title: 'Home' },
            { link: '/posts', title: 'Posts' },
            { link: '/about', title: 'About' },
            { link: '/contact', title: 'Contact' },
        ],
        title: 'My Blog Project'
    });
});

blogRouter.get('/about', (req, res) => {
    res.render('about', {
        nav: [
            { link: '/home', title: 'Home' },
            { link: '/posts', title: 'Posts' },
            { link: '/about', title: 'About' },
            { link: '/contact', title: 'Contact' },
        ],
        title: 'My Blog Project'
    });
});

blogRouter.get('/contact', (req, res) => {
    res.render('contact', {
        nav: [
            { link: '/home', title: 'Home' },
            { link: '/posts', title: 'Posts' },
            { link: '/about', title: 'About' },
            { link: '/contact', title: 'Contact' },
        ],
        title: 'My Blog Project'
    });
});




module.exports = blogRouter;
