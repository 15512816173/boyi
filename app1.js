//url和http模块
let http = require("http")
let url = require("url")
let server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/json:charest=utf-8")
    //根据路径不同，返回结果不同
    //请求的路径会放在req上面 req。url
    //localhost：3000/user  /user=>pathame ?name=1=>query
    let {pathname,query}=url.parse(req.url,true)
    if(pathname==="/user"){
        console.log(query.name)
        return res.end("访问的事user")
    }
    if(pathname==="/admin"){
        return res.end("admin")
    }
    if(pathname==="/banner"){
        return res.end(JSON.stringify(ary))
    }
});
server.listen(3000,function(){
    console.log("服务器3000端口启动");
});
