let fs = requre("fs");
let fsPromise = fs.peomises;
//读取文件  readFile  参数 文件路径
fsPromise.readFile(path.join(__dirname,"ap1.js"),"utf-8")
.then(data=>{
    console.log(data);
});
fsPromise.wrteFile('./a.text',"1234","utf-8").then(data=>{
    console.log("写入成功")
})