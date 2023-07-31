import { useMemo } from "react";// enables us to create side effects when the state of a component changes
const useFeaturedHouse = (allHouses) =>{
    let featuredHouse = useMemo(() =>{
        if(allHouses.length){
          const randomIndex = Math.floor(Math.random()*allHouses.length);
          return allHouses[randomIndex];
      }}, [allHouses]);

      return featuredHouse;
}
export default useFeaturedHouse;