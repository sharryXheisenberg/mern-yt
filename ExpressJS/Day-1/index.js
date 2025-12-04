import express from "express";
import {data} from "./Data/data.js";
// import { use } from "react";
const app = express();
const PORT = 8080;
app.use(express.json());  // middleware to parse the POST data


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


// *2 . POST request (it is for posting data)

app.post("/api/v1/users",(req,res)=>{
    console.log(req.body);
    const {name,displayname} = req.body;   // body because we are using post request 

    const newUser = {     // this thing will be add to the data.js 
        id:data.length+1,
        name,
        displayname
    };
    data.push(newUser);
    
    res.status(201).send(
        {
            message:"User created ",
            data:newUser
        }
    );
})

//*3  PUT request (for updating the data ||  UPDATE it all fields) 
app.put("/api/v1/users/:id", (req,res)=>{
    const {
        body , 
        params:{id},
    }=req;

    const parseID = parseInt(id);
    const userIndex = data.findIndex((user)=>user.id === parseID);
    if(userIndex === -1){
        res.status(404).send("User not found");
    }
    data[userIndex] = {
        id:parseID,
        ...body
    }
    res.status(201).send({
        message:"User updated successfully ",
        data:data[userIndex]
    });
})


//*4 PATCH request for updating the specific field

app.patch("/api/v1/users/:id", (req,res)=>{
    const {
        body , 
        params:{id},
    }=req;

    const parseID = parseInt(id);
    const userIndex = data.findIndex((user)=>user.id === parseID);
    if(userIndex === -1){
        res.status(404).send("User not found");
    }
    data[userIndex] = {
        ...data[userIndex], ...body
    }
    res.status(201).send({
        message:"User updated successfully ",
        data:data[userIndex]
    });
})


// *5 DELETE request(it is for deleting the user)  (assignment)
// *5 DELETE request (Corrected)
// Notice the added '/:id' in the route path
app.delete("/api/v1/users/:id", (req, res) => {
        const { id } = req.params;
    const parseID = parseInt(id);

    const userIdx = data.findIndex((user) => user.id === parseID);

    if (userIdx === -1) {
        return res.status(404).send({ message: "User not found!" }); 
    }

    const deletedUser = data.splice(userIdx, 1);    //here splice is used for deleting the value from the array

    res.status(200).send({
        message: "User deleted successfully",
        deletedUser: deletedUser[0] 
    });
});


app.listen(PORT, (req,res)=>{
    console.log(`Server is running in ${PORT}`);
})

