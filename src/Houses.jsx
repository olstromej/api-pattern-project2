import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import HouseCombo from "./HouseCombo";

function Houses(props) {
  const [house, setHouse] = useState({})

  let {houseInfo} = useParams()

  useEffect(() => {
    const getHouses = async () => {
      const response = await axios.get(
        "https://wizard-world-api.herokuapp.com/Houses"
      );
    

      let singleHouse = response.data.find((house) => {
        return house.name.toLowerCase() === houseInfo.toLowerCase()
      })

      setHouse(singleHouse)
    };
    getHouses();
  }, [houseInfo]);

  return (
    <div className="house">
      <div className="house-info">
        {house.name && <HouseCombo  house={house}/>}
      </div>
    </div>
  );
}
export default Houses;
