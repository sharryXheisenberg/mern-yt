import express from "express";
import {data} from "./Data/data.js";
// import { use } from "react";
const app = express();
const PORT = 8080;


// *1.GET request(it is for feteching data from server)

app.get("/",(req,res)=>{
    res.status(200).send("Hello wordl");
})

// Industry standards
app.get("/api/v1/users",(req,res)=>{
    // query params 
    const {name} = req.query;

    if(name){
        const user = data.filter((user)=>{
            return user.name === name;
        });
        res.status(200).send(user);
    }
    res.status(200).send(data);
})

// router params
app.get("/api/v1/users/:id",(req,res)=>{   // here /:id tells about dynamic route part means this thing or at the runtime routing based parameters will be route if the entered parameters is not there then we will ge the error message like server error 
    const {id}  = req.params;
    const profileId = parseInt(id);
    const user = data.find((user)=> user.id === profileId);
    res.status(200).send(user);
})


app.listen(PORT, (req,res)=>{
    console.log(`Server is running in ${PORT}`);
})

