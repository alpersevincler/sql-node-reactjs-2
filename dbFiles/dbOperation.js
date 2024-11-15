const config = require('./dbConfig'),
sql = require('mssql');

// SQL Server ile bağlatıyı gerçekleştir, sorgu gönder ve gelen cevabı geri dönder. Eğer hata varsa konsola yazdır
const getEmployees = async() => {
    try {
        // içinde bağlantı bilgileri olan config'i, mssql kütüphanesindeki connect fonk.una göndererek bağlantıyı gerçekleştirdik
        let pool = await sql.connect(config);
        // Database'e göndereceğimiz sorguyu tanımladık
        querySelect = "SELECT * from dbo.EmployeeDemographics";
        // tanımladığımız sorguyu bağlantıyı yaptığımız değişkenin(pool) altındaki query fonk. ile veritabanına gönderdik ve gelen cevabı employees'e atadık
        let employees = await pool.request().query(querySelect)

        // console.log("employees = ", employees);

        // sorgudan gelen cevabı geri dönderdik
        return employees;
    }
    catch(error) {
        console.log("ov man",error);
    }
};

module.exports = { getEmployees };