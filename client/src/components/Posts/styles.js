import { styled } from '@mui/system';
import { Grid} from '@mui/material';

export const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}))

// export default makeStyles((theme) => ({
//   mainContainer: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   smMargin: {
//     margin: theme.spacing(1),
//   },
//   actionDiv: {
//     textAlign: 'center',
//   },
// }));