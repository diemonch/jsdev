const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("This is Dev Box: Welcome back after the freaking Covid lockdown, have a bear");
});

app.listen(3000, ()=>{
console.log("Server is Up and Running");
});

function printString(string)
{
    console.log('Hey did you say this :' + string + '?');
}
printString ("Hello there");

