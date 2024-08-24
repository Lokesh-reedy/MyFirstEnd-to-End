const mongoose=require("mongoose");

mongoose.connect(
    "mongodb+srv://nagmanvenugopal:MoaoXi750i6ynIVh@cluster1.rs5ko.mongodb.net/"
)

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean,
    id:String
})

const todo=mongoose.model("todo",todoSchema);


module.exports={
    todo
};