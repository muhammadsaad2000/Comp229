//File Name: index.js, Student Name: Muhammad Saad,
// Student ID: 301077320 
//Web App Name: Comp 229 MidTerm 

export function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}