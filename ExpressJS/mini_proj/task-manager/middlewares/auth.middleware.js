export const authMiddleware = (req,res)=>{
    if(req.session && res.session.user){   // session is there and in that session user is present not null value 
        return next(); //m it goes to the next middleware  
    }
    res.status(401).json({message:"Unauthorized: please logIn"})
}