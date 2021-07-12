function calc(obj) {
    const value = 50 * obj.x;
    return value + obj.x + obj.y;
}

calc({
    x: 10,
    y: 20,
    z: 30
})

 
// run the above file like so 
// node --print-bytecode showByteCode.js > bytecode