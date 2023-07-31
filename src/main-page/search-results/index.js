import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import SearchResultRow from './search-results-row';
import HouseContext from '../../context/houseContext';

const SearchResults = () => {
    const allHouses = useContext(HouseContext)
    const {country} = useParams();
    const filteredHouses =allHouses.filter((h)=>h.country === country)
    return (
    <div>
        <div className='mt-2'>
            <h4>Results for {country}:</h4>
            <table className='table table-hover'>
                <tbody>
                    {filteredHouses.map((h)=>(
                    <SearchResultRow key={h.id} house={h} />
                    ))

                    }
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default SearchResults