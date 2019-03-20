import React from 'react';
import {Marker,Popup} from 'react-leaflet';
import Leaflet from 'leaflet'

const MarkerComponent =(props)=> {

        const {marker,selected} = props;

        const image = selected==marker ? new Leaflet.Icon({
           iconUrl: require('../images/map_marker.png'),
           iconSize:     [42, 48],
           popupAnchor:  [0, -11]// point from which the popup should appear
        }) : new Leaflet.Icon.Default();

        //component to specify Marker and add additional information if clicked by "Popup"
        return (
            <>
                <Marker position={[marker.latitude, marker.longitude]} icon={image} className='sizeMarker'>
                    <Popup class="tooltip">
                        <span className="tooltiptext">name: {marker.name}</span><br/>
                        <span className="tooltiptext">number of employees:{marker.numberOfEmployees}</span>
                    </Popup>
                </Marker>
            </>

        )
};

export default MarkerComponent;