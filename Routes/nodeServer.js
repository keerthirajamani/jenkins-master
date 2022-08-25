const http = require("http");
var mysql = require("mysql2");

const fs = require('fs');

const hostname = "0.0.0.0";
const port = 4000;
console.log("0!");

data = fs.readFileSync(process.env.MYSQL_PASSWORD_FILE, 'utf8')

// console.log(data)
const server = http.createServer((req, res) => {
  console.log("1!");
  let dbResult;
  var con = mysql.createConnection({
    host: process.env.HOST, 
    user: process.env.MYSQL_USER, 
    password: data,
    database: process.env.MYSQL_DATABASE,
    port: 3306,
  });
  console.log("3!");
  con.connect(function (err) {
     console.log("2");
    if (err) console.log(err);
    console.log("Connected!");
    var sql = "select * from user";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
        dbResult = result;
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/plain");
          // console.log(dbResult);
          res.end(JSON.stringify(dbResult));
    });
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
