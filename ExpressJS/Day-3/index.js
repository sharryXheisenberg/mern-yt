import cookieParser, { signedCookie } from 'cookie-parser';
import express from 'express';
const app = express();
app.use(express.json());  // global middleware
app.use(cookieParser("secret")); // global middleware
// import cors from 'cors';

const PORT = 8080;



app.get('/',(req,res)=>{
    // how to set/create the cookie
    res.cookie("userID","99",{
        maxAge:1000*60*60*24,
        signed:true
    });   // cookies are in key value pair 
    res.send('Hello world!');
});

app.get("/product" , (req,res)=>{
    console.log('Cookies: ', req.cookies)
    console.log("Signed cookies",req.signedCookies);

    if (req.cookies.name && req.cookies.name === "express") {
        return res.status(200).send({
            id:1,
            name:"Item-01",
            price:"$100",
            message:"You can now access this cookie because you are authorized"
    
            });
    }
    res.status(403).send("You are not authorized to view this page");
});

// more examples
app.get("/set-cookie",(req,res)=>{
    res.cookie('username','IshowSpeed.dev',{
        maxAge: 24*60*60*1000, // cookie will remain for 1 day
        httpOnly:true,
        secure:false,
    });
    res.send("Cookie has been sent!");
})

// route to read cookies

app.get("/get-cookies",(req,res)=>{
    const cookies = req.cookies;
    console.log('headers.cookie:', req.headers.cookie);
  console.log('req.cookies:', req.cookies);
  console.log('req.signedCookies:', req.signedCookies);
    res.send(`Cookies on this browser : ${JSON.stringify(cookies)}`);
});

// delete the cookie

app.get('/delete-cookie',(req,res)=>{
    res.clearCookie('username');
    res.send('Cookie has been cleared!')
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})
