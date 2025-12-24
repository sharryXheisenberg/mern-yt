import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { getAllTask,createTask,updateTask,deleteTask } from "../controller/task.controller";

const router = Router();

router.get("/",authMiddleware , getAllTask);
router.post("/",authMiddleware,createTask);
router.put("/:id",authMiddleware,updateTask);
router.delete("/:id",authMiddleware,deleteTask);


export default router;