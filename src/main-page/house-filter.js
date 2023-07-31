import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom' //useNavigate helps in navigation
import HouseContext from '../context/houseContext'

const HouseFilter = () => {
    const allhouses = useContext(HouseContext)
    const navigate = useNavigate()
    const countries = allhouses
    ? Array.from(new Set(allhouses.map((h)=>h.country)))
    : [];
    countries.unshift(null)
    const onSearchChange = (e) =>{
        const country = e.target.value
        navigate(`/searchresults/${country}`)
    }
  return (
    <div className='row mt-3'>
        <div className='offset-md-2 col-md-4'>
        Look for your dream house in your desired country
        </div>
        <div className='col-md-4 md-3'>
            <select className='form-select' onChange={onSearchChange}>
                {countries.map((c, key)=>(
                    <option key={key} value={c}>
                        {c}
                    </option>
                ))}
            </select>
        </div>

    </div>
  )
}

export default HouseFilter