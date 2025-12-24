// global imports 
import express from 'express';
import session  from 'express-session';
import authRoute from './routes/auth.routes.js';
import cookieParser from "cookie-parser";
import taskRoute from './routes/task.routes.js'

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret:"secret-key",  //this acts a string val for creating req.signed cookies or in easy words HMVAC key
    resave:false,
    saveUninitialized:false,
    cookie:{
        httpOnly:true,
        maxAge:1000*60*60*24 // 1 day
    }
}))


app.get('/',(req,res)=>{
    res.send('Welcome to task Manager');
})

app.use("/auth",authRoute);
app.use("/task",taskRoute);

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on ${PORT}`);
})




//Local imports 