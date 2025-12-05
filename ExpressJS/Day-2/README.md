### **MiddleWare**
- Middle ware is ExpressJS function that executes during the request , response cycle . It has access tp the 
 **Request object ('req')**  and **Response object**  ('res').
- We can apply middleware globally 
- They can also used for authentication 
- They can perform **Logging**  , **authentication** , **error handling** , etc.
- Middleware functions are executed in the order they defined in the code .

#### **Types of middleware**
 - 1) Global middleware
 - 2) specific routes middleware 
 - 3) Inbuilt middleware 