import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';

export const StyledInput = styled(InputBase)(({ theme }) => ({
  backgroundColor: 'white', // Base background color
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  width:'200px',
  fontSize: 14, // Adjust font size
  height: '100%',
  position: 'absolute',
  marginLeft: '0',
  '&.Mui-error .MuiInputBase-input': { // Style on error
    borderColor: theme.palette.error.main,
  },
  '&:hover': { // Hover effect
    backgroundColor: 'white',
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  backgroundColor: 'red', // Base background color
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  fontSize: 14, // Adjust font size
  '&.Mui-error .MuiInputBase-input': { // Style on error
    borderColor: theme.palette.error.main,
  },
  '&:hover': { // Hover effect
    backgroundColor: '#e0e0e0',
  },
}));

export const Search = styled("div")(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.action.disabledBackground, // Use the appropriate color
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))
export const Searchicon = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  marginLeft: '0',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))


//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: theme.palette.action.disabledBackground, // Use the appropriate color
//     '&:hover': {
//       backgroundColor: theme.palette.action.hover,
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//       marginLeft: theme.spacing(3),
//       padding: theme.spacing(1, 1, 1, 0),
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
//   toolbar: {
//     display: 'flex',

//     justifyContent: 'space-between',
//   },
// }));