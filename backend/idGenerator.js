function randomIdGenerator(){
    const randomnumber=(Math.random()*6).toString().substr(2,6);
    const date=Date.now().toString().substr(2,6);
    return randomnumber+"-"+date;
}
module.exports={
    randomIdGenerator
};