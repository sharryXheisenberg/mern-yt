import {readTask,writeTask} from "../utils/file.utils.js";


export const getAllTask = async(req,res)=>{
    if(!req.session.user){
        return res.status(401).json({message:"Unauthenticated"})
    }
    const tasks = await readTask();
    res.json(tasks.filter((task)=>task.username === req.session.user.username));
};


export const createTask = async(req,res)=>{
    try{
        if (!req.session.user) {
            return res.status(401).json({ message: "Unauthenticated" });
        }
    const {title , description} = req.body;
    const tasks = await readTask();

    const newTask = {
        id:Date.now(),
        username:req.session.user.username,
        title,
        description: description || "",
        completed:false
    }
        tasks.push(newTask);
        await writeTask(tasks);
        res.status(201).json(newTask);
    }catch(error){
        console.error("Error creating task:",error);
        return res.status(500).json({message:"Failed to create task",error:error.message});
    }
    
};


export const updateTask = async (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ message: "user is unauthorized" });
    }
    try {
        const allTasks = await readTask();
        const id = Number(req.params.id);
        if (Number.isNaN(id)) return res.status(400).json({ message: "Invalid id" });

        const idx = allTasks.findIndex(
            (t) => t.id === id && t.username === req.session.user.username
        );
        if (idx === -1) {
            return res.status(404).json({ message: "Task not found or not permitted" });
        }
        const { title, description, completed } = req.body;
        const updatedTask = {
            ...allTasks[idx],
            title: title ?? allTasks[idx].title,
            description: description ?? allTasks[idx].description,
            completed: typeof completed === "boolean" ? completed : allTasks[idx].completed,
        };

        allTasks[idx] = updatedTask;
        await writeTask(allTasks);
        return res.json(updatedTask);
    } catch (error) {
        console.error("Error updating task:", error);
        return res.status(500).json({ message: "Failed to update task", error: error.message });
    }
};

export const deleteTask = async (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ message: "user is unauthorized" });
    }
    try {
        const allTasks = await readTask();
        const id = Number(req.params.id);
        if (Number.isNaN(id)) return res.status(400).json({ message: "Invalid id" });

        const idx = allTasks.findIndex(
            (t) => t.id === id && t.username === req.session.user.username
        );
        if (idx === -1) {
            return res.status(404).json({ message: "Task not found or not permitted" });
        }

        const [deletedTask] = allTasks.splice(idx, 1);
        await writeTask(allTasks);
        return res.json({ message: "Task deleted", task: deletedTask });
    } catch (error) {
        console.error("Error deleting task:", error);
        return res.status(500).json({ message: "Failed to delete task", error: error.message });
    }
};