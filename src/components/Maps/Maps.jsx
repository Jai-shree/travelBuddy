import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import { LocationOnOutlined } from '@mui/icons-material';
import Rating from '@mui/material/Rating';

import {MapContainer , MarkerContainer , Paper1} from './styles';


const Maps = ({setCoordinates , setBounds , coordinates , places , setChildClicked}) => {
    //const coordinates = {lat:10 , lng:10};
    const isDesktop = useMediaQuery('(min-width:600px)');
    
    return (
        <MapContainer>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB38N3d8Hgt-56Hl6ZNPJksxaYS7jmo0C8' }}
                defualtCenter={coordinates}
                center={coordinates}
                defaultZoom={15}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e) => {
                    //e.preventDefault();
                    //console.log(e);
                    setCoordinates({ lat: e.center.lat , lng: e.center.lng });
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
                onChildClick={(child) => setChildClicked()}       
            >
                {places?.map((place , i) => (
                    <MarkerContainer lat={Number(place.latitude)}
                                     lng ={Number(place.longitude)}
                                     key = {i}> 
                        {
                            !isDesktop ? (
                                <LocationOnOutlined color="primary" fontSize="large"/>
                            ) : (
                                <Paper1 elevation = {3} >
                                    <Typography gutterBottom variant="subtitle2">
                                        {place.name}
                                    </Typography>
                                    <img cursor = "pointer"
                                        src = {place.photo ? place.photo.images.large.url : 'https://thumbs.dreamstime.com/b/plate-fork-spoon-restaurant-logo-white-background-eps-plate-fork-spoon-restaurant-logo-193685698.jpg'}
                                        alt={place.name}
                                        style={{ cursor: 'pointer' }}
                                    />
                                     <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                                </Paper1>
                            )
                        }  
                    </MarkerContainer>
                )) } 
            </GoogleMapReact>
        </MapContainer>
    )
}

export default Maps;