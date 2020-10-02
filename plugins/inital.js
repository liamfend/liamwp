var glob = require("glob")
const path = require('path')
//查找所有locales 里面的文件
let basePath = path.join(process.cwd(), 'src')
let relatePath = path.join(basePath, 'container/**/locales/*.js')
glob(relatePath,(err,files)=>{
    console.log(files)
})