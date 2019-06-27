let url = require("url");
let str = "www.abc.com/user?name=1"; //定义了一个地址
let result = url.parse(str,true);//加true的属性会把查询字符串转换成对象
//name=1=>{name:1}
console.log(result)
//protocol 'http:'  协议
//host  域名 带端口号
//hostname: 域名 'www.abc.com'
//search  带问号查询参数
//query 不带问号的查询参数
//pathname  访问的路径