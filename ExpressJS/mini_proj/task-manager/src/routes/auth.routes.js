import { Router } from "express";
import { Login, Logout } from "../controller/auth.controller.js";

const router = Router();

//login 
router.use('/login',Login);   // controller

//logout 
router.use('/logout',Logout)  // controller

export default router;