// manuel create işleminde kullanmak için dbFiles altındaki Employee adındaki class modülünü buraya import ettik
const express = require('express'),
dbOperation = require('./dbFiles/dbOperation'),
Employee = require('./dbFiles/employee'),
cors = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

let client;
let session;
// app.use içerikleri frontend kısmından server'a ileteceğimiz json'ları almamıza izin verecek
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// App.js'deki Click butonuna tıklayınca fetchData metodu ile bu post yapısı tetiklenecek ve geriye bir response gönderecek
app.post('/api', async(req, res) => {
    //burası tetiklendiği an terminal konsolunda called yazacaktır
    console.log('called /api from server');

    const result = await dbOperation.getEmployees(req.body.name);

    //tetiklkendikten sonra geriye gönderilen cevabı(response) yazdık
    // res.send({result: 'OMG HI from server'});

    res.send(result.recordset);
});

app.post('/hello', function(req, res)  {
    // await dbOperation.createEmployee(req.body);
    // const result = await dbOperation.getEmployees(req.body.Firstname);
    console.log('called /hello');
    res.send({result: 'OMG HI'});
});

// import ettiğimiz Employee class modülünü new anahtarı ile oluşturup içine manuel olarak satır bilgilerini parametre olarak gönderdik
let Pam = new Employee(1003, 'ayse', 'yil', 38, 'Female');

// dbOperation.getEmployees().then(res => {
//     console.log("res = ", res.recordset);
// });


// içinde satır bilgileri olan Pam ismindeki class modül değişkenini, dbOperation.js'in içindeki createEmployee metoduna parametre olarak gönderdik
// dbOperation.createEmployee(Pam);

app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));