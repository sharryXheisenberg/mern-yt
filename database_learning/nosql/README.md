## What is mongoDB?
MongoDB is a NoSQL database that is used to store large amounts of unstrucutred data. It uses a flexible , schema-less format, 
allowing for faster and more applications . MongoDB is document-oriented and stores data in a format called BSON (Binary JSON).

#### **Features**
- Schema-less design 
- Horizontal scaling 
- Replication
- Indexing

#### **Difference between MongoDB and SQL**
- SQL-> tables
  MongoDB-> collection

- SQL -> Fixed Schema
  MongoDB -> Dynamic schema

- SQL -> Strong consistency and ACID properties
  MongoDB-> Eventual consistency

- SQL -> Fixed(Int, char , Date , etc.)
  MongoDB -> Flexible (String , number , Array , etc.)

## **MongoDB terminologies**

**1.Database**
A mongoDB database holds collections of documents it is a similar to SQL systems

**2.Collection**
A collection is a group of MongoDB documents similar to a table in SQL database . Collection do not require a predefined schema so documents within the collection can have different structures.

**3.Document**
A document is a set of key-value pairs similar to a row in a table . It is stored a in BSON format , a binary form of JSON . 
it can include arrays , nested documents and different data types.

**4.Field**
A field is a key-value pair within a document . Each document in a collection can have different fields
Example:
```bash
"_id": objectid("34t3r3r356924f3w"),
"name": "john Doe",
"age": 30,
"address" : "Sector - 10 , Main road , Central park , Atto High Towers"
```

## **How mongoDB works**
MongoDB stores data in a binary format called BSON(binary JSON) . When a document is inserted into MongoDB it is converted into BSON , allowing for faster more efficient data retrieval 

### **JSON vs BSON**
- **JSON (JavaScript Object notation)**:- it is a lightweight data format for storing and exchanging data , usually in text format 
  and also it supports for strings

- **BSON (Binary JSON)**:- it is a binary encoded format for JSON like data .  It extends JSON to support additional data types 
 like ObjectId , and allows for faster encoding and decoding . 





