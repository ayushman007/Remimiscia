import { styled } from '@mui/system';
import {Card,CardMedia,Box, Grid, Typography,CardActions} from'@mui/material';



export const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
}))

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 0,
  paddingTop: '56.25%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken',
}))

export const StyledBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
     top: '20px',
     left: '20px',
     color: 'white',
}))

export const StyledBox2= styled(Box)(({ theme }) => ({
  position: 'absolute',
   top: '20px',
   right: '20px',
   color: 'white',
}))

export const StyledBox3= styled(Box)(({ theme }) => ({
  display: 'flex',
    justifyContent: 'space-between',
   margin: '20px',
}))

export const StyledTypography= styled(Typography)(({ theme }) => ({
  padding: '0 16px',
}))

export const StyledCardActions = styled(CardActions)(({ theme }) => ({
  padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
}))




// export default makeStyles({
//   media: {
//     height: 0,
//     paddingTop: '56.25%',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     backgroundBlendMode: 'darken',
//   },
//   border: {
//     border: 'solid',
//   },
//   fullHeightCard: {
//     height: '100%',
//   },
//   card: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     borderRadius: '15px',
//     height: '100%',
//     position: 'relative',
//   },
//   overlay: {
//     position: 'absolute',
//     top: '20px',
//     left: '20px',
//     color: 'white',
//   },
//   overlay2: {
//     position: 'absolute',
//     top: '20px',
//     right: '20px',
//     color: 'white',
//   },
//   grid: {
//     display: 'flex',
//   },
//   details: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     margin: '20px',
//   },
//   title: {
//     padding: '0 16px',
//   },
//   cardActions: {
//     padding: '0 16px 8px 16px',
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
// });