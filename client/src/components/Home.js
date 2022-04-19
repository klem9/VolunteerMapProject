import Catalog from './Catalog'
import Map from './Map';
import {useState, useEffect} from 'react'
import { Marker } from '@react-google-maps/api';

function Home() {

    
    const [charities, setCharities] = useState([]);

    useEffect(() => {
      fetch("/charities")
        .then((r) => r.json())
        .then(setCharities);
    }, []);
  
    console.log(charities)
  
    function mapCharities(){
      return (
      charities.map((item) => { 
    const location = {  
      lat: item.lat,
      lng: item.long
    };
        return(
        <Marker
          icon={{
            path:
              "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
            fillColor: "yellow",
            fillOpacity: 0.9,
            scale: 2,
            strokeColor: "gold",
            strokeWeight: 2,
          }}
          position={location}
        />        
        )
      })
      )
    }
    return(
        <div className="home-page">
            <div className="rightPage">
                <Catalog />
                <Map mapCharities={mapCharities()}/>
            </div>
        </div>

    )
}


export default Home;