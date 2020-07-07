import React from 'react';
import './App.css';

const currentYear = 2020
const country = "US"
fetch(`https://calendarific.com/api/v2/holidays?&api_key=${process.env.REACT_APP_KEY}&country=${country}&year=${currentYear}`).then(e=>{
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
