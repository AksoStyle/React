import React, { useState } from 'react';
import './Home.css';

const Create =() => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [date, setDate] = useState('');
  const [minute, setMinute] = useState('');
  const [second, setSecond] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submit_fields = {email, code, date};
    try{
      let res = await fetch("https://ncp-dummy.staging.moonproject.io/#operation/uploadCode", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(submit_fields)
  }).then(() => {
    console.log('correct')
  })

  if(res.status === 200){
    setEmail("");
    setDate("");
    setCode("");
  }
  else{
    
  }
    } catch(err){
      console.log(err);
    }
}

  return(
    <div className="App">
      <h1>Kódfeltöltés</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL CÍM:</label><br></br>
        <input 
          className="input_field"
          type="email"
          placeholder="jatekos@moonproject.io"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required/>
        <br></br>
        <label htmlFor="code">KÓD:</label><br></br>
        <input 
          className="input_field"
          type="text"
          placeholder="8 karakter, betük és/vagy számok pl:H1MM02FL"
          minLength="8"
          maxLength="8"
          pattern="[a-zA-Z0-9-]+"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required/>
        <br></br>
        <label className="b" htmlFor="vasarlas_datuma">VÁSÁRLÁS DÁTUMA:</label><br></br>
        <div className="child">
          <table>
            <thead>
              <tr>
                <th className="th1">Nap</th>
                <th className="th2">Óra:</th>
                <th className="th3">Perc:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td1"><input 
                                        type="date"
                                        placeholder="Augusztus 13" 
                                        value={date}
                                        min="2022.07.01"
                                        max="2022.08.31"
                                        onChange={(e) => setDate(e.target.value)}
                                        required/>
                                      </td>
                <td className="td2"><input 
                                        type="number" 
                                        min="0"
                                        max="12"
                                        value={minute}
                                        onChange={(e) => setMinute(e.target.value)}
                                        required/> 
                </td>
                <td className="td3"><input 
                                          type="number" 
                                          min="00" 
                                          max="59"
                                          value={second}
                                          onChange={(e) => setSecond(e.target.value)}
                                          required/>
                                          </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="button" type="submit">Kódfeltöltés</button>
      </form>
    </div>
    )
  }

export default Create;