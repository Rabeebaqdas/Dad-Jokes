import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [joke,setjoke] = useState([])
  const [config2,setconfig2] = useState({})
  const [hook,sethook] = useState(false);

  const generateJoke = () => {
  const config = {
    headers: {
     Accept: 'application/json'
    }
  }
  setconfig2(config);
  sethook(true);
}
   useEffect(() => {
    const getData = async () => {
      const data = await fetch("https://icanhazdadjoke.com/",config2);
      const res = await data.json();
      setjoke(res);
      console.log(res);
    }
    getData()
   
  }, [config2])
  
  return (
    <>
    <div className="container">
        <h3>Don't Laugh Challange</h3>
        <div className="joke" id="joke">
    {joke.joke}
        </div>
        <button id="jokeBtn" className="btn" onClick={generateJoke}>{hook ? "Another Joke" : "Get joke"}</button>
    </div>
</>
  );
}

export default App;
