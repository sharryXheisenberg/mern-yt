import express from "express";
const app = express();

app.use(express.json());
const PORT = 8080;



// global middleware 

app.get("/",(req,res)=>{
    res.send("Hello world!");
})


app.listen(PORT , (req,res)=>{
    console.log(`Server is listening on PORT ${PORT}`);
})