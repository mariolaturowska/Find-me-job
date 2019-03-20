import React from 'react'
import { Map as LeafletMap, TileLayer} from 'react-leaflet';
import MarkerComponent from './markerComponent';

const Map =(props)=> {

        const {companiesList,
            selected}=props;

        if(!companiesList){
            return null;
        }

        //variable to render markers on map based on companies list
        let markers=companiesList.map((marker,index)=>{
            return <MarkerComponent marker={marker} key={index} selected={selected}/>
        });

        //variable to find center in the map selected company or first company from list
        let centerElement=companiesList.filter(company=>{
            return company==selected;
        });

        let center=centerElement[0]==undefined ? [companiesList[0].latitude, companiesList[0].longitude]:[centerElement[0].latitude, centerElement[0].longitude];

        //returning map with markers
        return (
            <LeafletMap
                className='mapSection'
                center={center}
                zoom={3}
                maxZoom={10}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
            >
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                {markers}
            </LeafletMap>
        );
};

export default Map