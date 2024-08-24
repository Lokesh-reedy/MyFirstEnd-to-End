export function Todos({todos}){//destructuring
//there are arrayn of todos to render so we use map function
function ButtonHandler(id){
    fetch("http://localhost:3000/completed",{
        method:"PUT",
        body: JSON.stringify({
            id:id
        }),headers:{
            "Content-Type":"application/json"
        }
    }).then(async function(res){
        const value=await res.json();
    })
}
    return (
        <div>{todos.map(function(todo){
            return <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={() => ButtonHandler(todo.id)}>{todo.completed==true?"Well done!!":"mark as done"}</button>
            </div>
        })}
        </div>
    )
    
}
    
