import WorldGeography from '../assets/world-110m.json';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

function WorldMap() {
  return (
    <div>
      <ComposableMap>
        <ZoomableGroup zoom={1}>
          <Geographies geography={WorldGeography}>
            {({ geographies }) =>
              geographies.map((geography) => { 
                console.log(geography);
                return(
                <Geography key={geography.rsmKey} geography={geography} 
                fill="#E4E5E6"
                stroke="#232323"
                strokeWidth="0.3"
                className="focus:outline-none"
                />
              )})
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  )
}

export default WorldMap;
