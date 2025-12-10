import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

router.get("/dashboard", authMiddleware, (req,res)=>{
    res.status(200).send({
        message:`Welcome to the dashboard  ${req.user.name}`
    });
});

//Dashboard  (only users who have access token)
export default router;