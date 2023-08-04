const express = require('express')
const app=express()

app.set("view engine","ejs")
app.use(express.urlencoded({extended: true}))


app.get('/signup',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
    
})



app.post('/signup',async(req,res)=>{
    
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.email);
    console.log(req.body.contactNum);
    console.log(req.body.password);
    res.redirect("login")
})


app.get('/login', (req, res) => {
    res.sendFile(__dirname+'/views/login.html'); // Render the login form
    
});

app.post('/signup',async(req,res)=>{
    
   
    console.log(req.body.email);
    
    console.log(req.body.password);
    
})


// const userRouter = require('./routes/users')

// app.use('/',userRouter)

app.listen(3000)