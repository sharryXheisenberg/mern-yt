const EventEmitter = require("events");

const emitter = new EventEmitter();

//* 2) on(eventName , Listner) -- create

emitter.on("GREET",(args)=>{
    console.log(`Hello! world ${args.userName} and the id is ${args.id}`);
})

//* 1)emit(EventName , [args]) --- execute


emitter.emit("GREET", {  // args object 
    userName:"Saurabh",  
    id:"8763437829efdsadwew32"
}) ;


