





const fs = require('fs');

const file = require('./Example2.json');


//reading json file
fs.readFile('Example2.json', (err, data) => {
    if (err) throw err;
    let emp = JSON.parse(data);
    console.log(emp);

    file.Company = "Wipro Limited";
    
//writing to json file
fs.writeFile('Example2.xml', JSON.stringify(file), function writeJSON(err) {
  if (err) return console.log(err);

  
console.log('This is after the Update call\n');
  console.log(JSON.stringify(file));
  console.log('writing to ' + 'Example2.json');



}); 
});