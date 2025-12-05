import express from "express";
const app = express();

app.use(express.json());
const PORT = 8080;

// global middleware 
function SayHiMiddleware(req,res,next){   // next method 
    console.log("Hi , I am middleware!");
    next();  // next will allow us that executed the next function or request 
}

app.use(SayHiMiddleware);  /// global middleware means it is executing for each route or request irrespective of the type but the routes or methods defined after this 'Global middleware' definition


// route middleware
app.get("/",SayHiMiddleware,(req,res)=>{
    res.send("Hello world!");
})

app.get("/users" , (req,res)=>{
    res.send("Users page");
})


// Ex.1 - Authentication Middleware

function isAuthenticated(req,res,next){
    const token = req.headers['authorization'];
    if(token === 'valid-token'){
        console.log("User authenticated");
        next();  // user is authenticated proceed to the next middleware routes
    }else{
        res.status(401).send("Unauthorized: Invalid Token!");
    }
}

// applying above isAuthenticated middleware function to protected routes
app.get("/dashboard", isAuthenticated, (req,res)=>{
    res.send("Welcome to the dashboard!");
})

// Ex.2 Logging middleware

function logger(req,res,next){
    const method = req.method;
    const url = req.url;

    console.log(`[${new Date().toISOString}] ${method} request to ${url}1`);
    next();
}

// applying logger middleware globally 
app.use(logger);


app.get("/public" , (req,res)=>{
    res.send("This is a public route no authentication is required");
})




app.listen(PORT , (req,res)=>{
    console.log(`Server is listening on PORT ${PORT}`);
})