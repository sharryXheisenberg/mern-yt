import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';    // 
import { generateToken } from '../utils/token.utils.js';


const router = express.Router();




router.get("/generate-token",(req,res)=>{
    const token = generateToken();
    res.status(200).send({
        message:"Token generated please save this token for future purpose",
        token : token
    });
});

router.get("/",(req,res)=>{
    res.status(200).send({
        message:"Welcome to the home page"
    });
});

// generate token
// home route 

export default router;