import React, {useState, useEffect} from 'react'
import { MapContainer, TileLayer, useMap, useMapEvent} from 'react-leaflet'

export default function MapWrapper(props) {

    const [zoom, setZoom] = useState(11);
    const berlin = [52.51747492975108, 13.405293950596873]
    
    console.log(props.zoom);

    const username = "medivis";
    const style_id = "ckikh8gre0xty17r1w2loid8b";
    const token = "pk.eyJ1IjoibWVkaXZpcyIsImEiOiJja2lrZ3dqbHYwOXAzMzFveWx5Z2t2ZmVhIn0.HNv5p8TvNdS1STFiMakHpQ"
    
    const url = `https://api.mapbox.com/styles/v1/${username}/${style_id}/tiles/256/{z}/{x}/{y}@2x?access_token=${token}`
    const attribution = "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>";
    
    const mapHeight = props.height ? props.height : "80vh";
    const scrollWheelZoom = props.scrollWheelZoom ? props.scrollWheelZoom : false;

    return (
        <>
            <MapContainer style={{ height: mapHeight, width: "100%", zIndex: 0}} center={berlin} zoom={zoom} scrollWheelZoom={scrollWheelZoom}>
                <TileLayer
                    attribution={attribution}
                    url={url}
                />
                {props.children}
            </MapContainer>
        </>
    )
}
