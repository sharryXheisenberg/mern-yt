import express from "express";
import userRouter from "./routers/user.routes.js";  // when we need to take {userRouter} symbol and userRouter without {} braces
const app = express();
app.use("/api/v1/users",userRouter);

app.use(express.json());
const PORT = 8080;

app.use("/",(req,res)=>{
    res.send("Hello wordl!");
})




app.listen(PORT , (req,res)=>{
    console.log(`Server is listening on PORT ${PORT}`);
})