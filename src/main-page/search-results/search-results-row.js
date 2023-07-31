import React from 'react'
import { useNavigate } from 'react-router-dom';

const SearchResultRow = ({house}) => {
    const navigate = useNavigate();
    const setActive = () => {
        console.log(house)
      navigate(`/house/${house.id}`)

    };
  return (
    <tr onClick={setActive}>
        <td>{house.address}</td>
        <td>{house.price}</td>
      
    </tr>
  )
};

export default SearchResultRow