const express=require("express");
const{forCreateTodo,forUpdate}=require("../backend/types");
const {todo}=require("../backend/db/typesmongo");
const {randomIdGenerator}=require("../backend/idGenerator");
const cors=require("cors");
const app=express();

app.use(cors({//this makes your backend weak so that anyone can hit it 
    origin:"http://localhost:5173"//this make only 5173 can hit the backend
}));
app.use(express.json());



app.post("/todos",(req,res)=>{//to post a todo
    const payload= req.body;
    const validate = forCreateTodo.safeParse(payload);

    if (!validate.success) {
        return res.status(411).json({
            message: "Wrong input",
            errors: validate.error.errors ,
        });
    }
    
   const randomid=randomIdGenerator(); 
    todo.create({
        title:payload.title,
        description:payload.description,
        completed:payload.complete,
        id:randomid
    });
    res.json({
        message:"done adding the todo"
    })
})



app.get("/todos",async(req,res)=>{ //to get all the todos
     const Alltodos=await todo.find({});
     res.status(200).json({
        Alltodos
     })
})

app.put("/completed",async(req,res)=>{//marks the todo if it is completed
const payload =req.body;
const validate=forUpdate.safeParse(payload);
if(!validate.success){
    return res.status(411).json({
        message: "Wrong input",
        errors: validate.error.errors 
    })
} 

    try{
         await todo.updateOne({ id: payload.id }, {
            $set: { completed: true }
            
        });
        
    }catch(err){
        console.log(err);
    }
       


 
res.json({
    message:"done completing"
})

})


app.listen(3000);
