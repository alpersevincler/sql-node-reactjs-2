// create işleminde kullanmak için kurucu metodunun içine bütün satır bilgilerini parametre olarak alan Employee adında sınıf oluşturduk
class Employee {
    constructor(EmployeeID, Firstname, Lastname, Age, Gender) {
        this.EmployeeID = EmployeeID;
        this.Firstname = Firstname;
        this.Lastname = Lastname;
        this.Age = Age;
        this.Gender = Gender;
    }
};

// class'ın modülünü Employee adında dış dünyaya açtık
module.exports = Employee;
