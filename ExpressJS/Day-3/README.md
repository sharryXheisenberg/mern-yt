### **Cookies**
##### **what is cookies in backend development ?** 
- Cookies are small pieces of data which are stored on client browser stored by server 
- The concept is that server don't know the client means express server is **stateless**  
- They are used to maintain the conncetion between client and server over multiple requests
- size of one cookie is **4KB** 

#### **Headers**
 **Definition**
 Headers are key-value pairs in an HTTP request or response that provide metadata  about the communication. They influence the how the server or client process the message.

 **Types of headers**

 1. **Request headers**
    - sent by the client to the server
    - Example: `user-Agent` , `Accept` , `Authorization`.
    - Purpose: specify the client information , authentication and desired response format

    **Example**
    ``` http
    GET/api/data HTTP/1.1
    Host: example.com
    User-Agent:Mozilla/5.0
    Accept:application/json

2. **Response headers**
   - Sent by the server to the client.
   - Example : `Content-type` , `Set-cookies` , `Cache-Control`,
   - purpose: Provide details about the response 


### **Status code in HTTP**

**Definition**
Status code are numerical codes includes in HTTP responses to indicate the outcome of the request

**Classification of status code**

1. **1xx : Informational**
   - Indicates the request being processed

2. **2xx : Success**
   - The request was successful
   - Example:
     - `200 ok`:The request was successful
     - `201 Created`: A resource was created successfully

3. **4xx : Client errors**
   - The client sent a bad request.
   - Example:
     - `400 Bad request`
     - `401 Unauthorized`
     - `403 Forbidden`
     
 