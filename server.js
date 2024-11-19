// manuel create işleminde kullanmak için dbFiles altındaki Employee adındaki class modülünü buraya import ettik

const express = require('express'),
dbOperation = require('./dbFiles/dbOperation'),
Employee = require('./dbFiles/employee'),
cors = require('cors');

// import ettiğimiz Employee class modülünü new anahtarı ile oluşturup içine manuel olarak satır bilgilerini parametre olarak gönderdik
let Pam = new Employee(1003, 'ayse', 'yil', 38, 'Female');

dbOperation.getEmployees().then(res => {
    console.log("res = ", res.recordset);
});


// içinde satır bilgileri olan Pam ismindeki class modül değişkenini, dbOperation.js'in içindeki createEmployee metoduna parametre olarak gönderdik
// dbOperation.createEmployee(Pam);