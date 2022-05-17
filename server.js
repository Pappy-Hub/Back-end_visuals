const http = require("http");

//create a server with the HTTP variable
const server = http.createServer(function (req, res) {
  //Headers

  res.writeHead(200, { "content-type": "text/plain" }); //Plain text format
  res.writeHead(200, { "content-type": "application/json" }); //json format
  res.writeHead(200, { "content-type": "text/html" }); //html format

  //Send back some information
  // res.end('Hello, World'); //Plain text format

  //json format format
  // res.end(`
  //     {
  //         "name": "Pappy",
  //         "Job": "Devops",
  //         "Quote": "Do It Now"
  //     }
  // `);

  //html format
  res.end(`
    <html>
      <body style="background: black; text-align: center; color: cyan">
        <h1>My First Node.js Server Task</h1>
        <p>I'm loving it</p> 
      </body
    </html>    
    `);
});

//Create a port
server.listen(4000, "127.0.0.1");

console.log("Yes, you have created a server!");
