import React from "react";
import { Grid,CircularProgress } from "@mui/material";
import { StyledGrid } from "./styles.js";
import {useSelector} from 'react-redux';
import Post from "./Post/post.js";

//import useStyles from './styles.js'

const Posts = ({setCurrentId}) => {


  const posts = useSelector(state => state.posts);
  //const classes = useStyles();
  console.log(posts);
  return (
    
      ! posts.length ? <CircularProgress/>:(
         <StyledGrid container alignItems="stretch" spacing={3}>
               {posts.map(post =>(
                <Grid item xs={12} sm={6}  key={post._id}>
                  <Post post={post} setCurrentId={setCurrentId}/>
                </Grid>
               ))}
         </StyledGrid>
      )
  
  );
};

export default Posts;
