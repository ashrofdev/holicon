import React from 'react';
import logo from './logo.svg';
import './App.css';

const currentYear = 2020
const country = "US"
fetch(`https://calendarific.com/api/v2/holidays?&api_key=	22d2b8dd7e5bef1a2e78b2aec1b8cf360e3c529b&country=${country}&year=${currentYear}`).then(e=>{
    return e.json()
    .then(e=>{
        console.log(e)
    })
})
function App() {
  return (
    <div className="App">
      <h1>here we go</h1>
      <p>open the console</p>
    </div>
  );
}

export default App;
