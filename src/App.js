import './App.css';
import React, { useState } from 'react';

function App() {

  const [returnedData, setReturnedData] = useState(['hellone']);

  // burada tanımladığımız satır bilgilerinin default değerleri olacak
  // input'a girilen değerleri setInput yakakayacak, örneğin input'un name'i EmployeeID ise useState'in içindeki EmployeeID'nin değeri input'a girilen değer olacak
  const [employee, setEmployee] = useState({EmployeeID: 0, Firstname: '', Lastname: '', Age: 0, Gender: ''});

  // <input>'lara onChange={setInput} özelliği vermiştik. inputa veri girildiğinde buraya e parametresini gönderecek
  const setInput = (e) => {
    // e parametresinin altındaki target, girilen veriyi value, input'un name attribute'unu da name adında yakalayacaktır 
    const {name, value} = e.target;
    // yakaladığımız, input'a girilen veriyi(value) ve veri girilen input'un name özelliğinin ismini(name), anlık olarak tarayıcı konsoluna yazdırdık
    console.log(value, name);

    // veritabanında EmployeeID ve Age'i number olarak tanımlamıştık dolayısıyla bu bilgiler integer olarak db'ye gitmeli. 
    // -Frontend'den girilen bilgiler string olarak yakalanmış olacak, bunun için name'i EmployeeID ve Age olan verileri if ile tespit edip Integer'a çevirdik
    if(name === 'EmployeeID' || name === 'Age') {
      setEmployee(prevState => ({
        ...prevState,
        [name]: parseInt(value)
      }));
    }

    setEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  }


  const fetchData = async () => {
    
    console.log(employee)

    const newData = await fetch('/api', {
      method: 'GET',
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    console.log(newData);
    setReturnedData(newData.result)
    
  }

  return (
    <div className="App">

      <input type='number' name='EmployeeID' placeholder='EmployeeID' onChange={setInput}></input>
      <input name='Firstname' placeholder='Firstname' onChange={setInput}></input>
      <input name='Lastname' placeholder='Lastname' onChange={setInput}></input>
      <input type='number' name='Age' placeholder='Age' onChange={setInput}></input>
      <input name='Gender' placeholder='Gender' onChange={setInput}></input>

      <button onClick={() => fetchData()}>Click</button>
      <button onClick={() => fetchData()}>Create</button>


      <p>EmployeeID: {returnedData.EmployeeID}</p>
      <p>Firstname: {returnedData.Firstname}</p>
      <p>Lastname: {returnedData.Lastname}</p>
      <p>Age: {returnedData.Age}</p>
      <p>Gender: {returnedData.Gender}</p>

      {returnedData}

    </div>
  );
}

export default App;
