/**
 * The App component in this React application fetches and displays places data, allows filtering by
 * rating and type, and shows the places on a map.
 * @returns The `App` component is being returned, which contains the structure of the application
 * including the `Header`, `List`, and `Map` components. The component uses various state variables
 * such as `places`, `filteredPlaces`, `childClicked`, `coordinates`, `bounds`, `isLoading`, `type`,
 * and `rating` to manage the data and UI interactions. The component also includes `useEffect
 */
import React from 'react';
import { useState,useEffect } from 'react';
import { CssBaseline, Grid } from '@mui/material';

import { getPlacesData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Maps/Maps';

const App = () => {
    const[places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const[ childClicked , setChildClicked] = useState(null);

    const [coordinates,setCoordinates] = useState({});
    const [bounds , setBounds] = useState({});

    const [ isLoading, setIsLoading] = useState(false);
    const [type ,setType] = useState('restaurants');
    const [rating ,setRating] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords:{latitude, longitude}}) => {
            setCoordinates({lat: latitude , lng:longitude });
        })
    },[]);

    useEffect(() => {
        const filteredPlaces =  places.filter((place) => place.rating > rating);
        setFilteredPlaces(filteredPlaces);
    },[rating]);

    useEffect(() => {
        //console.log(coordinates,bounds);
        if(bounds.sw && bounds.ne){
            setIsLoading(true);
            getPlacesData(type,bounds.sw,bounds.ne)
                .then((data) =>{
                    //console.log(data);
                    setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
                    setFilteredPlaces([]);
                    setIsLoading(false);
                } )
        }
    }, [type,bounds]);

    console.log(places)
    console.log(filteredPlaces)
    return (
        <>
            <CssBaseline />
            <Header setCoordinates={setCoordinates}/>
            <Grid container spacing={3} style={{ width: '100%',height:'100%'}}>
                <Grid item xs={12} md={4}>
                    <List 
                        places={filteredPlaces.length? filteredPlaces:places}
                        childClicked={childClicked}
                        isLoading = {isLoading}
                        type={type}
                        setType={setType}
                        rating = {rating}
                        setRating = {setRating}

                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates = {setCoordinates}
                        setBounds = {setBounds}
                        coordinates = {coordinates}
                        places={filteredPlaces.length? filteredPlaces: places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default App;