const express = require('express'),
dbOperation = require('./dbFiles/dbOperation'),
Employee = require('./dbFiles/employee'),
cors = require('cors');

let Pam = new Employee(1007, 'Pams', 'Bees', 38, 'Female');

dbOperation.getEmployees().then(res => {
    console.log("res = ", res.recordset);
});

 
// dbOperation.createEmployee(Pam);  