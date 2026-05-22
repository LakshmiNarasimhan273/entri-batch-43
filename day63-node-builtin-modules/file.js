// fs - File System
const fs = require("fs");

// 3 parameters
// FileName
// File Content
// Callback Function
fs.writeFile("entri.txt", "Hello It's a Entri Live Session", (err) => {
    if(err){
        console.log("File Creation Failed");
        return;
    }
    console.log("File operation successful");
});