import cookieParser from 'cookie-parser';
import express from 'express';
import session from 'express-session';

const app = express();
app.use(express.json());
// app.use(session); 

app.use(session(
    {
        secret:"mysecret",
        saveUninitialized:false,
        resave:false,
        cookie:{
            maxAge:1000*60*60*24 // 1 day
        }
    }
));


app.use(cookieParser("codesnippet"));   // what is cookieparser more info and it's usage 

app.get("/login",(req,res)=>{
    req.session.user = {
        name:"John",
        email:"john123@example.com",
        age:30
    }
    res.send(`${req.session.user.name} is logged in`)
})


app.get('/',(req,res)=>{
    console.log(req.session);
    console.log(req.session.id);
    res.send("Hello world!");
});


app.listen(8080,(req,res)=>{
    console.log(`Server is running on http://localhost:8080 `)
});