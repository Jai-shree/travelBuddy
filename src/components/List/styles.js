import { styled } from '@mui/material/styles';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

export const Container = styled("div")(({ theme })=> ({
   padiing: '25px',
}))

export const Control = styled(FormControl)(({ theme })=> ({
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: '30px',
 }))

 export const Listlist = styled(Grid)(({ theme })=> ({
    height: '75vh',
     overflow: 'auto',
 }))

 export const Loading = styled("div")(({ theme })=> ({
   height: '600px', 
   display: 'flex', 
   justifyContent: 'center', 
   alignItems: 'center',
}))