const https=require("https");
var assert = require('assert');

var fs = require('fs');

https 
.get("https://jsonplaceholder.typicode.com/posts/1",resp=>
{
let data = "";


resp.on("data",chunk => {
    data+=chunk;
});


resp.on("end", () => {
let result=JSON.parse(data);
console.log(result);
//this test will pass
assert.notDeepEqual('userId:1',result,"UserId is not present");

//this test will fail it will check exactly same
//assert.strictEqual('userId:11',result,"UserId is not present");

//assert.equal('userId:1',result,"UserId is not present");

//Writing the responce into the new XML file
fs.writeFile('Example04.xml', JSON.stringify(result), function writeJSON(err) {
    if (err) return console.log(err);


});
});
})
.on("error",err=>{
    console.log("Error:"+err.message);


}); 