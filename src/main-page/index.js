import Header from './header'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './main-page.css';
import FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';
import SearchResults from './search-results';
import HouseFromQuery from '../house/HouseFromQuery';
import useHouses from '../hooks/useHouses';
import useFeaturedHouse from '../hooks/useFeaturedHouse';
import HouseContext from '../context/houseContext';

function App() {
const allHouses = useHouses();
const featuredHouse = useFeaturedHouse(allHouses)
  
  return (
    <Router>
      <HouseContext.Provider value={allHouses}>
    <div className='container'>
      <Header subtitle='Providing houses all over the world'/>
      <HouseFilter allhouses={allHouses}/>
      <Routes>

      <Route path='/searchresults/:country' 
      element={<SearchResults />}/>

      <Route path='/house/:id' 
      element={<HouseFromQuery />} />

      <Route path='/' 
      element={<FeaturedHouse house={featuredHouse}/>}>
     
        
      </Route>
      </Routes>
    </div>
    </HouseContext.Provider>
    </Router>
    
   
  );
}

export default App;
