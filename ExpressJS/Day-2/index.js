import express from "express";
const app = express();

app.use(express.json());
const PORT = 8080;

app.use("/",(req,res)=>{
    res.send("Hello wordl!");
})

app.use("/create-user",(req,res)=>{
    res.send("Users page");
})

app.use("/getAllUsers",(req,res)=>{
    res.send("Get all users");
});

app.use("/getUserById",(req,res)=>{
    res.send("Get user by Id");
});



app.listen(PORT , (req,res)=>{
    console.log(`Server is listening on PORT ${PORT}`);
})