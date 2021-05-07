const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); //for serving static files
app.use(express.urlencoded())


//PUG SPECIFIC STUFF
app.set('view engine', 'pug') //set template engine as pug
app.set('views', path.join(__dirname, 'views')); //set the views directory


//ENDPOINTS
app.get('/', (req, res)=>{
    const params = {'title':'Harshit Dubey - MERN stack web developer'}
    res.status(200).render('home.pug', params)
})

app.get('/skills', (req, res)=>{
    const params = {'title':'My skills - Harshit Dubey - MERN stack web developer'}
    res.status(200).render('skills.pug', params)
})

app.get('/projects', (req, res)=>{
    const params = {'title':'My projects - Harshit Dubey - MERN stack web developer'}
    res.status(200).render('projects.pug', params)
})

app.get('/contact', (req, res)=>{
    const params = {'title':'Contact Me - Harshit Dubey - MERN stack web developer'}
    res.status(200).render('contact.pug', params)
})

//LISTENING THE PORT
app.listen(port, ()=>{
    console.log(`server started at port ${port}`)
});