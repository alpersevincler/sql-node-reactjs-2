const express = require('express'),
dbOperation = require('./dbFiles/dbOperation'),
cors = require('cors');


dbOperation.getEmployees().then(res => {
    console.log("res = ", res.recordset);
});
