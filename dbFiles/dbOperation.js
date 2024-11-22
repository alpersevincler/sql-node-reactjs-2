const config = require('./dbConfig'),
sql = require('mssql');

// SQL Server ile bağlatıyı gerçekleştir, sorgu gönder ve gelen cevabı geri dönder. Eğer hata varsa konsola yazdır
const getEmployees = async(firstname) => {
    try {
        // içinde bağlantı bilgileri olan config'i, mssql kütüphanesindeki connect fonk.una göndererek bağlantıyı gerçekleştirdik
        let pool = await sql.connect(config);
        // Database'e göndereceğimiz sorguyu tanımladık
        // querySelect = "SELECT * from dbo.EmployeeDemographics";
        // tanımladığımız sorguyu bağlantıyı yaptığımız değişkenin(pool) altındaki query fonk. ile veritabanına gönderdik ve gelen cevabı employees'e atadık
        // let employees = await pool.request().query(querySelect)

        let queryClick = `SELECT * from EmployeeDemographics WHERE Firstname = '${firstname}'`;

        let employees = await pool.request().query(queryClick)

        // console.log("employees = ", employees);

        // sorgudan gelen cevabı geri dönderdik
        return employees;
    }
    catch(error) {
        console.log("ov man",error);
    }
};

// içinde satır bilgileri olan class modülünü Employee adında parametre olarak aldık
const createEmployee = async(Employee) => {
    try {
        // içinde bağlantı bilgileri olan config'i, mssql kütüphanesindeki connect fonk.una göndererek bağlantıyı gerçekleştirdik
        let pool = await sql.connect(config);
        // Database'e göndereceğimiz sorguyu tanımladık. Gelen parametrenin içindeki bilgileri nokta(.) operatörü ile teker teker sorgumuzun içine yazdırdık
        queryCreate = `INSERT INTO EmployeeDemographics VALUES ( ${Employee.EmployeeID}, '${Employee.Firstname}','${Employee.Lastname}', ${Employee.Age}, '${Employee.Gender}' )`;
        // tanımladığımız sorguyu bağlantıyı yaptığımız değişkenin(pool) altındaki query fonk. ile veritabanına gönderdik ve gelen cevabı employees'e atadık
        let employees = await pool.request().query(queryCreate)

        
        // sorgudan gelen cevabı geri dönderdik
        return employees;
    }
    catch(error) {
        console.log("createEmployee error = ", error);
    }
};

module.exports = { getEmployees, createEmployee };