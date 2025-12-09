import express from 'express';

const router = express.Router();

router.get("/dashboard",(req,res)=>{
    res.status(200).send({
        message:"Welcome to the dashboard"
    });
});

//Dashboard  (only users who have access token)
export default router;