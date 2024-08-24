const zod=require("zod");

const forCreateTodo=zod.object({
    title:zod.string(),
    description:zod.string()
});
const forUpdate=zod.object({
    id:zod.string()
});

module.exports={
    forCreateTodo:forCreateTodo,
    forUpdate:forUpdate
}