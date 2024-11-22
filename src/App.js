import './App.css';
import React, { useState } from 'react';

function App() {

  const [returnedData, setReturnedData] = useState(['hellone']);

  // burada tanımladığımız satır bilgilerinin default değerleri olacak
  // input'a girilen değerleri setInput yakakayacak, örneğin input'un name'i EmployeeID ise useState'in içindeki EmployeeID'nin değeri input'a girilen değer olacak
  const [employee, setEmployee] = useState({EmployeeID: 0, Firstname: '', Lastname: '', Age: 0, Gender: ''});

  // <input>'lara onChange={setInput} özelliği vermiştik. inputa veri girildiğinde buraya e parametresini gönderecek
  const setInput = (e) => {
    // e parametresinin altındaki target, girilen veriyi 'value', input'un name attribute'unu da 'name' adında yakalayacaktır 
    const {name, value} = e.target;
    // yakaladığımız, input'a girilen veriyi(value) ve veri girilen input'un name özelliğinin ismini(name), anlık olarak tarayıcı konsoluna yazdırdık
    console.log(value, name);

    // Yakalanan verileri setEmployee ile useState ile tanımladığımız employee'ye set ettik
    // veritabanında EmployeeID ve Age'i number olarak tanımlamıştık dolayısıyla bu bilgiler integer olarak db'ye gitmeli. 
    // -Frontend'den girilen bilgiler string olarak yakalanmış olacak, bunun için name'i EmployeeID ve Age olan verileri if ile tespit edip Integer'a çevirdik
    if(name === 'EmployeeID' || name === 'Age') {
      setEmployee(prevState => ({
        ...prevState,
        [name]: parseInt(value)
      }));
    }

    // Yakalanan verileri setEmployee ile useState ile tanımladığımız employee'ye set ettik
    setEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  }


  const fetchData = async () => {
    // Click butonuna tıklandığında tarayıcı konsolunda yukarıda useState ile tanımlanmış emmloyee'nin içeriği yazılacaktır
    console.log("fetchData employee = ", employee)

    // fetch ile /api adresinde server.js ile bağlantı kurduk. server.js'de de app.post('/api' şeklinde yapı oluşturduk
    //  -server.js'deki bu yapıdan gelen cevabı res.json() şeklinde yakalayıp newData'ya atadık
    // server.js ile bağlantıdan sonra bir body kısmı oluşturduk. body'nin içinde useState ile oluşturduğumuz employee'nin içindeki Firstname bilgisini
    //  -çağırıp bunu name olarak tanımladık ve bunu da Json String formatına çevirdik. Bu bilgi server.js'e req(request) olarak gidecektir
    const newData = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'apllication/json'
      },
      body: JSON.stringify({
        name: employee.Firstname
      })
    })
    .then(res => res.json())

    //Click butonuna tıklandığında server.js'den gelen newData bilgisini tarayıcı konsolunda yazdırdık
    console.log("fetchData fetch newData = ", newData); //result: 'OMG HI from server'

    // yukarıda useState ile tanımlanmış returnedData'nın içeriğini newData'daki result'ın içeriği ile doldurduk ve sayfanın en altında {returnedData} şeklinde yazdırdık
    // setReturnedData(newData.result) //OMG HI from server

    // sayfada sadece 1 tane satır bilgisi göstermek istediğimizden server.js'den gelen cevapta 1den fazla içerik varsa sadece ilk elemanı yazdırmak istedik.
    //  -bunun için newData[0] şeklinde sadece 0. elemanı useState'deki returnedData'ya gönderdik.
    setReturnedData(newData[0])
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


      {/* Click butonuna tıklandığında fetchData metodu çalıştı ve bu metod useState'deki returnedData'ya DB'den gelen bilgileri aktardı */}
      <p>EmployeeID: {returnedData.EmployeeID}</p>
      <p>Firstname: {returnedData.Firstname}</p>
      <p>Lastname: {returnedData.Lastname}</p>
      <p>Age: {returnedData.Age}</p>
      <p>Gender: {returnedData.Gender}</p>

      {/* {returnedData} */}

    </div>
  );
}

export default App;
