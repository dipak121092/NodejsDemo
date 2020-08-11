var fs = require('fs'),
    xml2js = require('xml2js');
 
var parser = new xml2js.Parser();
fs.readFile( 'Example1.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        console.log(result);
        console.log('Done');

        var json = result;

    json.note.heading = "Wipro limited,Bangalore"; 

    // create a new builder object and then convert
    // our json back to xml.
    var builder = new xml2js.Builder();
    var xml = builder.buildObject(json);

    fs.writeFile("Example1.xml", xml, function(err, data) {
      if (err) console.log(err);

      console.log("successfully written our update xml to file")
    });
});

});