import React from 'react';
import { useState , useEffect , createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import {Container , Control , Listlist ,Loading} from './styles.js';
import PlaceDetails from '../PlaceDetails/PlaceDetails.jsx';


const List = ({places, childClicked, isLoading, type, setType, rating, setRating}) => {

    const [elRefs , setElRefs] = useState(['']);
    //console.log({childClicked});

    useEffect(() => {
        setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
      }, [places]);

     return (
        <Container>
            <Typography variant="h4" >Restaurants, Hotels & Attractions around you..!!</Typography>
            {isLoading ? (
                <Loading>
                    <CircularProgress size="5rem" />
                </Loading>
            ) : (
                <>
            <Control>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </Control>
            <Control>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </Control>
            <Listlist container spacing={3}>
                {places?.map((place,i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails 
                            place={place}
                            selected= {Number(childClicked) === i} 
                            refProp={elRefs[i]}
                        />
                    </Grid>
                ))}
            </Listlist>
            </>
            )}
        </Container>
    );
}

export default List;