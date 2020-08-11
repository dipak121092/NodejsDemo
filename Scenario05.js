import http,{IncommingMessage} from 'http'
import { RequestOptions } from 'https';




const port=8080
const host='localhost'

const options: RequestOptions ={
    hostname:host,
    port:port,
    method:'POST',
    headers:{"Content-type": "application/json; charset=UTF-8"
},
path:'/'
}
const request=http.request(options,(res:IncommingMessage)=>{
if(res.statusCode !==201){
console.log('error occurred')
return
}
const contentType=res.headers["content-type"]

if(contentType !=='application/json'){
    console.log('connot handle the provided')
    return
}

let data=''
res.on('data',(chunk)=>{
    data+=chunk.toString('utf8')
    try{
        const json=JSON.parse(data)
        console.log('json data is',json)
    }catch(error)
    {
        console.log('content was not valid')
    }
})
res.on('end',()=>{
console.log('recieved data',data)

})    
    
})

request.write(JSON.stringify({
    title: 'foo', body: 'bar', userId: 1

}),()=>{
    console.log('data has bin written')
})

request.end()