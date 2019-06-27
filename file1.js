let path = require("path");
let fs = require("fs");
let fsPromise = fs.promises;
fsPromise.readFile(path.join(__dirname,'good.json'),"utf-8").then(data=>{
    let data = JSON.parse(data)
    data.push({
        id:2,
        name:"橘子"
    })
    fsPromise.writeFile(filename,JSON.stringify(data),'utf-8');
});