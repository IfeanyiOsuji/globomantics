import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import House from '.';
import HouseContext from '../context/houseContext';

const HouseFromQuery = () => {
    const allHouses = useContext(HouseContext)
    const {id} = useParams();
  
    const house = allHouses.find((h)=> h.id == parseInt(id))
    console.log(house)
    if(!house) return <div>House not found</div>
  return (
    <div><House house={house}/></div>
  )
}

export default HouseFromQuery