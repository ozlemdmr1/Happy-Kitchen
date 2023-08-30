import { createConnection } from "mysql";
function bh() {
  const connection = createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "happy_kitchen",
  });

  connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });

  return connection;
}

export default bh;
