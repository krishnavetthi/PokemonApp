import React,{ useState } from "react";

import './App.css'
import Pokemon  from "./feature/pokemon";
import Error from "./feature/error";

function App() {

  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchDetails = async () => {
  const pokemonid = document.getElementById("pokemonid");
  const pokemonvalue = pokemonid.value;

 try{
    setIsLoading(true);
    setDetails(null);
    setError('');
   
    const fetchData = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonvalue}`);
      
    const details = await fetchData.json();
     
      console.log(details, details.abilities[0].ability.name, details.forms[0].name)
      setDetails(details)
    
  }catch(err){
    
    setError(err)
  }finally{
    setIsLoading(false);
  }
}

  return (
    <div className='align'>
    <h1>Pokemon App</h1>
    <input id="pokemonid" type="text" className="inputbox" placeholder="Enter ID"></input><br/><br/>
    <button onClick={fetchDetails}> Click</button>
    {/* {isLoading ? <>Loading ....</>: error?<>{error} </> : details ? <Movie details={details} /> :<></>}   */}
    {isLoading ? <>Loading ....</>: error?<><Error/> </> : details ? <Pokemon details={details} /> :<></>}
    </div>
  ) 
}

export default App
