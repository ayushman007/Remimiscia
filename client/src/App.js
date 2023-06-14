import React,{useEffect,useState}from 'react';

import { useDispatch } from 'react-redux';

import {getPosts} from './actions/posts';
import { Container,Grow,Grid } from '@mui/material';

import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';

import reminiscia from './images/Reminiscia.png';

import { StyledAppBar,StyledTypography,StyledImage } from './styles.js';




const App=()=>{

  const [currentId,setCurrentId]=useState(0);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch]);
   
    return(
        <Container maxWidth='lg'>
              <StyledAppBar position='static' color="inherit">
                <StyledTypography  variant='h2' align='center'>Reminiscia</StyledTypography>
                <StyledImage src={reminiscia} alt="reminiscia" height="60"/>
              </StyledAppBar>
              <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                       <Grid item xs={12} sm={7}>
                          <Posts setCurrentId={setCurrentId}/>
                       </Grid>
                       <Grid item xs={12} sm={4}>
                          <Form currentId={currentId} setCurrentId={setCurrentId}/>
                       </Grid>
                    </Grid>        
                </Container>
              </Grow>
        </Container>
    );
}

export default App;