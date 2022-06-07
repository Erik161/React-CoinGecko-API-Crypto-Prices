import { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const getData = async () =>{
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1");
    console.log(res.data);
  }

  useEffect(()=>{
    getData() 
  }, [])


  return (
    <div className="App">
     
    </div>
  );
}

export default App;
