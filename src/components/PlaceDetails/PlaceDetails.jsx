import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Rating from '@mui/material/Rating';

import {Chips} from './styles.js';
const PlaceDetails = ({ place , selected , refProp}) => {
    
    if(selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start"});
    return (
        <Card elevation = {6}>
            <CardMedia 
                style = {{ height: 350}}
                image = { place.photo ? place.photo.images.large.url : 'https://thumbs.dreamstime.com/b/plate-fork-spoon-restaurant-logo-white-background-eps-plate-fork-spoon-restaurant-logo-193685698.jpg'}
                title = {place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name} </Typography>
                <Box display="flex" justifyContent="space-between" my={2}>
                    <Rating name="read-only" value={Number(place.rating)} readOnly />
                    <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>
                {place?.awards?.map((award) => (
                    <Box my={1} dispaly="flex" justifyContent="space-between" alignItems="center">
                        <img src={award.images.small} alt={award.display_name}/>
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))}
                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name}/>
                ))}
                {place.address && (
                    <Typography gutterBottom variant="body2" color="textSecondary" >
                        <LocationOnIcon />{place.address}
                    </Typography>
                )}
                {place.phone && (
                <Typography variant="body2" color="textSecondary">
                    <PhoneIcon /> {place.phone}
                </Typography>
                )}
                <CardActions>
                <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                    Trip Advisor
                </Button>
                <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                    Website
                </Button>
            </CardActions>
            </CardContent>
        </Card>
    );
}

export default PlaceDetails;