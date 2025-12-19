### **Sessions**
- **Definition** - Sessions store data on the server and a session ID is shared with the client via a cookie or URL parameter.
- **Location** - Stored on server side.
- **Lifespan** - Exists till the user is actively connected to session .
- **Storage capacity** - There is no such limitation on server side (backend / database)
- **Security** - More secure as sensitive data remains on the server. 
- **Use case** - Commonly used for managing the user login , etc.

#### **Key difference between cookies and sessions**
- Cookies -> Client side , Session -> Server side
- Cookies -> Less secure , Session -> more secure
- Cookies -> Persistance can persist beyond the browser sessions , Session -> Ends with user interactivity 

- **Key Options:**
- **`Secret`:** A string used to sign the session ID.
- **`resave`:** Determines whether to save the session to storage on every request , even if it hasn't been modified. 
- **`saveUnintialized`:** Saves uninitialized sessions to storage.
- **`Cookie`:** Defines cookies behaviour (e.g, secure , expiration)



