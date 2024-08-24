import { useState } from "react";

export function CreateTodo(){
    const [title,settitle]=useState("")
    const [description,setdescription]=useState("")

    function handletodo(){
        fetch("http://localhost:3000/todos",{
            method:"POST",
            body: JSON.stringify({
                title:title,
                description:description,
                completed:false
    
        }),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(async function(res){
            const response=await res.json();
        })
    }
    return <div>
        <input type="text" placeholder="title" onChange={function(e){
            const value=e.target.value;
            settitle(value);
        }}/> <br />
        <input type="text" placeholder="description" onChange={function(e){
            const value2=e.target.value;
            setdescription(value2);
        }} /><br />
<button onClick={handletodo
        }>Add todo</button>
    </div>
}
