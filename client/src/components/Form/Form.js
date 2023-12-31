import React,{useState,useEffect} from 'react';
import {StyledPaper,StyledForm,StyledButton,StyledBox} from './styles.js';
import { TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPost,updatePost } from '../../actions/posts.js';
import {useSelector} from 'react-redux';


const Form =({currentId,setCurrentId})=>{
    
    const [postData,setPostData]=useState({creator:'',title:'',message:'',tags:'',selectedFile:''})
    const post = useSelector((state) => (currentId?state.posts.find(p => p._id === currentId):null  ));     
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
          e.preventDefault();

          if(currentId){
            dispatch(updatePost(currentId,postData));

          }else{
          dispatch(createPost(postData));
          }
        clear();
    }

    useEffect(()=>{
        if(post)  setPostData(post)
    },[post])

    const clear=  ()=>{
           
        setCurrentId(null);
        setPostData({creator:'',title:'',message:'',tags:'',selectedFile:''})
    }
    return (
        <StyledPaper>
            <StyledForm  autoComplete='off' noValidate  onSubmit={handleSubmit}>


            <Typography variant='h6'> {!currentId?'Creating':'Editing'} a Reminiscia </Typography>


        <TextField name='creator' 
            variant='outlined' 
            label='Creator' 
            fullWidth value={postData.creator}
            onChange={(e)=>setPostData({...postData,creator:e.target.value})} />

        

        <TextField name='title'  
            variant='outlined' 
            label='Title' 
            fullWidth value={postData.title}
            onChange={(e)=>setPostData({...postData,title:e.target.value})} />  

        <TextField name='message' 
            variant='outlined' 
            label='Message' 
            fullWidth value={postData.message}
            onChange={(e)=>setPostData({...postData,message:e.target.value})} />    

        <TextField name='tags' 
            variant='outlined' 
            label='Tags' 
            fullWidth value={postData.tags}
            onChange={(e)=>setPostData({...postData,tags:e.target.value})} /> 

        <StyledBox>
                <FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})} />
        </StyledBox>   

        <StyledButton variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</StyledButton>
        <StyledButton variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</StyledButton>

        </StyledForm>
            
        </StyledPaper>
    )
}

export default Form;