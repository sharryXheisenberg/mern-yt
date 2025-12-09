import express from 'express';
import publicRoutes from "./routes/public.routes.js";
import privateRoutes from "./routes/private.routes.js";
import logMiddleware from './middleware/log.middleware.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';    //   this convert the fileURL to path like "c/user/documents."

const app = express();
const PORT  = 8080;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if(!fs.existsSync(path.join(__dirname,"logs"))){
    fs.mkdirSync(path.join(__dirname,"logs"));
}

//*Inbuilt middleware
app.use(express.json());

//* Global middleware
app.use(logMiddleware);

   // app.use is only for middleware purpose
// *Middleware to routes


app.use("/public",publicRoutes);
app.use("/private" , privateRoutes);


app.listen(PORT,(req,res)=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

