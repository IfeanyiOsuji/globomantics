import Header from './header';
import { useEffect, useState, useMemo } from 'react'; // enables us to create side effects when the state of a component changes
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './main-page.css';

function App() {
  [allHouses, setAllHouses] = useState([])
  useEffect(() => {
    const fetchHouses = async ()=>{
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);
  let featuredHouse = useMemo(() =>{
    if(allHouses.length){
      const randomIndex = Math.floor(Math.random()*allHouses.length);
      return allHouses[randomIndex];
  }}, [allHouses]);
  
  return (
    <Router>
    <div className='container'>
      <Header subtitle='Providing houses all over the world'/>

    </div>
    <Switch>
      <Route path='/'></Route>
      </Switch>
    </Router>
  
   
  );
}

export default App;
