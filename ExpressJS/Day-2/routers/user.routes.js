import { Router } from "express"; //It allows you to break down your application's routing into smaller, independent modules. Instead of a single, monolithic file for all routes, you can create separate router files for different functionalities

// This enables you to apply middleware (e.g., authentication, logging, validation) only to the routes within a particular router, ensuring that it doesn't affect other parts of your application unnecessarily.

const userRouter = Router();  // Exress  router 

userRouter.use("/create-user",(req,res)=>{
    res.send("Users page");
})

userRouter.use("/getAllUsers",(req,res)=>{
    res.send("Get all users");
});

userRouter.use("/getUserById",(req,res)=>{
    res.send("Get user by Id");
});

export default userRouter;