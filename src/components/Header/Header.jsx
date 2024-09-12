import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Input, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { StyledInput,Title,Search,Searchicon } from './styles';
import {Autocomplete} from '@react-google-maps/api';
// import { StyledComponent } from './styles';

const Header = ({setCoordinates}) => {
  const [autocomplete,setAutocomplete] = useState(null);
  const onLoad = (autoC) => setAutocomplete(autoC); 

  const onPlaceChanged = () => {
    const lat=autocomplete.getPlace().geometry.location.lat();
    const lng=autocomplete.getPlace().geometry.location.lng();

    setCoordinates({lat,lng});
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Title variant="h5">
          Travel Advisor
        </Title>
        <Box display="flex" flexGrow={0.875} justifyContent="flex-end">
          <Title variant="h6">
            Explore new places
          </Title>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <Search>
                <Searchicon>
                  <SearchIcon />
                </Searchicon>
                <StyledInput
                  placeholder="Search..."
                />
             </Search>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;