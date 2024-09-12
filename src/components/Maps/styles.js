import { styled } from '@mui/material/styles';
import { Paper, Typography, useMediaQuery } from '@mui/material';

export const MapContainer = styled("div")(({ theme })=> ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '85vh',
    width: '100%',
}))

export const MarkerContainer = styled("div")(({ theme })=> ({
    position: 'absolute', 
    transform: 'translate(-50%, -50%)', 
    zIndex: 1, 
    '&:hover': { zIndex: 2 },
}))

export const Paper1 = styled(Paper)(({ theme })=> ({
    padding: '10px', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    width: '100px',
}))
