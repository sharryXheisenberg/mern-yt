import cookieParser from 'cookie-parser';
import express from 'express';
const app = express();
app.use(express.json());
app.use(cookieParser());

const PORT = 8080;



app.get('/',(req,res)=>{
    // how to set/create the cookie
    res.cookie("name","express",{
        maxAge:1000*60*60*24
    });   // cookies are in key value pair 
    res.send('Hello world!');
});

app.get("/product" , (req,res)=>{
    console.log('Cookies: ', req.cookies)

    res.status(200).send({
        id:1,
        name:"Item-01",
        price:"$100"
    });
});

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})
