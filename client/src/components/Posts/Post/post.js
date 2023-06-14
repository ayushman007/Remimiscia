import React from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { CardContent,Button,Typography} from '@mui/material';
import { StyledCard,StyledCardMedia,StyledBox,StyledBox2,StyledBox3 ,StyledTypography,StyledCardActions} from './style.js';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import moment from 'moment';



const Post =({post,setCurrentId})=>{
    return (
        <StyledCard>
            <StyledCardMedia image={post.selectedFile} title={post.title}/>
            
            <StyledBox>
                <Typography variant='h6'>  {post.creator} </Typography>
                <Typography variant='body2'>  {moment(post.createdAt).fromNow()} </Typography>
            </StyledBox>

            {/* <StyledBox2>
                <Button sx={{color:'white'}} size='small' onClick={()=>{
                    // setCurrentId(post._id)
                    console.log('button clicked')}}>
                    <MoreHorizIcon fontSize='default'/>
                </Button>
            </StyledBox2>
            
            <StyledBox>
                <Typography variant='h6'>  {post.creator} </Typography>
                <Typography variant='body2'>  {moment(post.createdAt).fromNow()} </Typography>
            </StyledBox> */}

            <StyledBox2>
                <Button sx={{color:'white'}} size='small' onClick={()=>{
                    setCurrentId(post._id)
                    console.log('button clicked')
                }}>
                    <MoreHorizIcon fontSize='default'/>
                </Button>
            </StyledBox2>

            <StyledBox3>
                   <Typography variant='h6' color="textSecondary"> {post.tags.map(tag =>`#${tag}`)} </Typography>
                   
            </StyledBox3>

            <CardContent>
            <StyledTypography  gutterBottom variant="h5" component="h2">{post.title}</StyledTypography>
            </CardContent>

            <StyledCardActions>
               <Button  size='small' color='primary' onClick={()=>{}}>
                 <ThumbUpAltIcon fontSize='small'/>
                 Like
                 {post.likeCount}
               </Button>

               <Button  size='small' color='primary' onClick={()=>{}}>
                 <DeleteIcon fontSize='small'/>
                 Delete
                 
               </Button>
            </StyledCardActions>
        </StyledCard>
    )
}

export default Post;