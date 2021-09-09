import { useEffect, useState } from 'react';
import './App.css';
import Inicio from './Inicio/inicio';
import Students from './Students';

function App() {

const [charList, setCharList]=useState([])
const [thehouse, setThehouse]=useState(true)


useEffect(()=>{
  fetch("http://hp-api.herokuapp.com/api/characters/students")
  .then((response)=> response.json())
  .then((response)=> setCharList(response))
  .catch((err)=> console.log(err))
},[])
  return (
    <div className="App">
      <div className="App-header">
          {thehouse ?(
            <Inicio setThehouse={setThehouse} charList={charList}/>
          ):(
            <Students thehouse={setThehouse} charList={charList}/>
          )}
      </div>
    </div>
  );
}

export default App;
