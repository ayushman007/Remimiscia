import { styled } from '@mui/system';
import { Paper ,Button,Box} from '@mui/material';



export const StyledPaper= styled(Paper)(({ theme }) =>({
     
  padding: theme.spacing(2),

}));


export const StyledForm=styled('form')(({ theme })=>({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    }
}))



export const StyledButton=styled(Button)(({ theme })=>({
  marginBottom: 10,
}))


export const StyledBox=styled(Box)(({ theme })=>({
  marginBottom: 10,
}))



/*const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));

export default useStyles;*/
