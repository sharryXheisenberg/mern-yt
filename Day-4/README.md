### **Streams**

#### **Definition** 

- Transfering heavy data from one end / node to other end / node in the form of chunks(buffer - transfer some amount of data not entire one).
- pipe() method specifications is that at LHS side of pipe() method accepts only readable streams and at right hand side only writeable streams 

- req:parameter from callback function is also a readbleStream and res:is also a writebleStream 
- How to determine that data is transferred in which way . First start the server before that create an instance of readbleStream and that instance takes input for reading a **sample.txt** file 
- After that run the server and check the networks tab and choose localhost header , scroll it little and you will see in response headers the **Transfer-encoding** in ####**chunked** type 



