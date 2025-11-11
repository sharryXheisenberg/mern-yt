const EventEmitter = require("events");

const userEmitter = new EventEmitter();

const fs = require("fs");
// //* 2) on(eventName , Listner) -- create

// emitter.on("GREET",(args)=>{
//     console.log(`Hello! world ${args.userName} and the id is ${args.id}`);
// })

// //* 1)emit(EventName , [args]) --- execute


// emitter.emit("GREET", {  // args object 
//     userName:"Saurabh",  
//     id:"8763437829efdsadwew32"
// }) ;

// LISTENS FOR MULTIPLE TYPES OF USER EVENTS (e.g login , logout , purchase and profile update);

let cnt = 0;


const eventCounts={
    logIn:0,
    logOut:0,
    purhcase:0,
    profileUpdate:0
}

const LogFile = "eventlong.json";

if(fs.existsSync(LogFile)){
    const data = fs.readFileSync(LogFile,"utf-8");
    Object.assign(eventCounts,JSON.parse(data));  //assign makes copy in from target object from given object
}

function saveCounts(){
    fs.writeFileSync(LogFile,JSON.stringify(eventCounts , null , 2));  //stringify converts object to json
}

userEmitter.on("LOGIN",(username)=>{
    eventCounts.logIn+=1;
    console.log(`${username} logged in successfully`)
    // console.log(`Login event is called ${eventCounts.logIn}`);
    saveCounts();
});

userEmitter.on("LOGOUT",(username)=>{
    eventCounts.logOut+=1;
    console.log(`${username} log out successfully`);
    saveCounts();
    // console.log(`Logout event is called ${eventCounts.logOut}`);
});

userEmitter.on("PURCHASE",(username , item)=>{
    eventCounts.purhcase+=1;
    console.log(`${username} purchase a ${item} successfully`);
    saveCounts();
    // console.log(`Purchase event is called ${eventCounts.purhcase}`);
});


userEmitter.on("PROFILEUPDATE",(username , field)=>{
    eventCounts.profileUpdate+=1;
    console.log(`${username} updated  their profile ${field} successfully`);
    saveCounts();
    // console.log(`Profile update event is called ${eventCounts.profileUpdate}`);
});

userEmitter.on("SUMMARY",()=>{
    console.log("\n Events Summary");
    console.log(`Login: ${eventCounts.logIn} events count`);
    console.log(`Logout: ${eventCounts.logOut} events count`);
    console.log(`Purchase: ${eventCounts.purhcase} events count`);
    console.log(`profileUpdate: ${eventCounts.profileUpdate} events count`);
})


// event emitted means uses an event
userEmitter.emit("LOGIN","Saurabh123");
// userEmitter.emit("LOGIN","Megatron123");
userEmitter.emit("LOGOUT","Saurabh123");
userEmitter.emit("PURCHASE","Saurabh123" , "Book");
userEmitter.emit("PROFILEUPDATE","Saurabh123" , "email");
userEmitter.emit("SUMMARY");

