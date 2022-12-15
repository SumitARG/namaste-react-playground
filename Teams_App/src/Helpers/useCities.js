import { useEffect, useState } from "react"
import stateMap from "../../assets/data/StateCityData.json"

const useCities = (stateName) => {
    
    const [cities, setCities] = useState([]);
    
    const fetchData = async() => {
        const json = stateMap[stateName];
        setCities(json);
    }

    useEffect(() => {
        fetchData(); 
    }, [stateName]);

    return cities;
}

export default useCities;