const app = require("./index");
const connect = require("./configs/db");
app.listen(4500, function () {
  connect();
  console.log("listing to the port 4500");
});
