const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/db");

const app = express();
app.use(bodyParser.json());

// API ENDPOINTS

// Test DB
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch(err => console.error(`Unable to connect to the database:`, err));

//Error 2
const CustOrganizationsdb = require("./models").CustOrganizations;
CustOrganizationsdb.findAll()
  .then(products => {
    //console.log('products');
    // res.json(products);
  })
  .catch(err => console.log(err));

// Error 3
// const WorkOrdersdb = require("./models").WorkOrders;
// WorkOrdersdb.findAll()
//   .then(products => {
//     //console.log('products');
//     // res.json(products);
//   })
//   .catch(err => console.log(err));
const port = 3000;
app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
