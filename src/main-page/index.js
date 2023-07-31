import Header from './header';
import { useEffect, useState, useMemo } from 'react'; // enables us to create side effects when the state of a component changes
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './main-page.css';
import FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';
import SearchResults from './search-results';
import HouseFromQuery from '../house/HouseFromQuery';

function App() {
  const [allHouses, setAllHouses] = useState([])
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
      <HouseFilter allhouses={allHouses}/>
      <Routes>
      <Route path='/searchresults/:country' element={<SearchResults allHouses={allHouses} />}/>
      <Route path='/house/:id' element={<HouseFromQuery allHouses={allHouses} />} />
      <Route path='/' element={<FeaturedHouse house={featuredHouse}/>}>
     
        
      </Route>
      </Routes>
    </div>
    
    </Router>
  
   
  );
}

export default App;
