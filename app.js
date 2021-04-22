const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/contactDb', {useNewUrlParser: true, useUnifiedTopology: true});
const port = 80;


//MONGOOSE SPECIFIC STUFF
// const contactSchema = new mongoose.Schema({
//     name: String,
//     age: String,
//     gender: String,
//     address: String,
//     more: String,
// });

// const contact = mongoose.model('contact', contactSchema);


//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); //for serving static files
app.use(express.urlencoded())


//PUG SPECIFIC STUFF
app.set('view engine', 'pug') //set template engine as pug
app.set('views', path.join(__dirname, 'views')); //set the views directory


//ENDPOINTS
app.get('/', (req, res)=>{
    const con = 'lets discuss whether it is good for our health or not.'
    const params = {'title':'join the best zym of delhi now!', 'content': con}
    res.status(200).render('base.pug', params)
})

app.get('/home', (req, res)=>{
    const con = 'lets discuss whether it is good for our health or not.'
    const params = {'title':'join the best zym of delhi now!', 'content': con}
    res.status(200).render('home.pug', params)
})

// app.post('/', (req, res)=>{
//     var myData = new contact(req.body);
//     myData.save().then(()=>{
//         res.send('data has been stored to database.')
//     }).catch(()=>{
//         res.status(400).send('something error happend.')
//     })
// })


//LISTENING THE PORT
app.listen(port, ()=>{
    console.log(`server started at port ${port}`)
});