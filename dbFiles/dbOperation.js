const config = require('./dbConfig'),
sql = require('mssql');

const getEmployees = async() => {
    try {
        let pool = await sql.connect(config);
        querySelect = "SELECT * from dbo.EmployeeDemographics";
        let employees = await pool.request().query(querySelect)
        // console.log("employees = ", employees);
        return employees;
    }
    catch(error) {
        console.log("ov man",error);
    }
};
 
module.exports = {
    getEmployees
} 