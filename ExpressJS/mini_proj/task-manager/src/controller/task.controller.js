import {readTask,writeTask} from "../utils/file.util.js";


export const getAllTask = async(req,res)=>{
    if(!req.session.user){
        return res.status(401).json({message:"Unauthenticated"})
    }
    const tasks = await readTask();
    res.json(tasks.filter((task)=>task.username === req.session.user.username));
};


export const createTask = (req,res)=>{};


export const updateTask = (req,res)=>{};


export const deleteTask = (req,res)=>{};
