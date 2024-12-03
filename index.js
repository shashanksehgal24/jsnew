
import { connect, connection } from 'mongoose';

connect("mongodb://0.0.0.0/mongo.db");
const db=connection;
db.once("open",()=>{
    console.log("ysyyyy!!!");
})
db.on("error",()=>{
    console.log("error");
})
console.log("ki");