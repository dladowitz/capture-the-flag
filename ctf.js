var http = require('http');
var url = require( "url" );
var queryString = require( "querystring" );
var state = 0;

http.createServer(function (request, response) {
  var theUrl = url.parse( request.url );

  // gets the query part of the URL and parses it creating an object
  var queryObj = queryString.parse( theUrl.query, true ).query;

  // queryObj will contain the data of the query as an object
  // and jsonData will be a property of it
  // so, using JSON.parse will parse the jsonData to create an object
  //var obj = JSON.parse( queryObj.jsonData );

  // as the object is created, the live below will print "bar"
  console.log( "--------" + theUrl + queryObj );//+ "----"+ queryObj.jsonData);


  generateResponse(response);

  
}).listen(8080);

function algo(state) {

}


function generateResponse(response) {
  response.writeHead(200, {'Content-Type': 'text/json'});
  response.end('Hello World\n');
}

console.log('Server running at http://127.0.0.1:8080/');