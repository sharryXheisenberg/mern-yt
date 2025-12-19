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




### **Learnings** 
- **`Cookie-parser`:** parses the cookie header  on incoming HTTP requests and populates req.cookies (for unsigned cookies) and req.signedCookies (for signed cookies).

``` bash
req.cookieParser("string" || array of string)

```
here cookieParser uses the parameter string or arrays to create HMAC key  which enables parsing of signed cookies . Signed cookies are not encrypted - they are the original value plus an HMAC signature to the server can detect tampering.

**When to pass it / types allowed:**
- No argument: cookieParser() — you get req.cookies only, for unsigned cookies.
- Single string: cookieParser('mySecret') — enables req.signedCookies.
Array of strings: cookieParser(['key1','key2']) — useful for key rotation (old keys still verify).
- Best practice: use a long random secret stored in an environment variable (e.g., process.env.COOKIE_SECRET).


