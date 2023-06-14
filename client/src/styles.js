import { styled } from '@mui/system';
import {AppBar,Typography} from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }));

export const StyledImage=styled('img')(({ theme })=>({
    marginLeft: '15px'
}))

export const StyledTypography= styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
  }));
// const useStyles=makeStyles((theme)=>({
//     appBar: {
//     borderRadius: 15,
//     margin: '30px 0',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   heading: {
//     color: 'rgba(0,183,255, 1)',
//   },
//   image: {
//     marginLeft: '15px',
//   }
// }))

//export default useStyles;