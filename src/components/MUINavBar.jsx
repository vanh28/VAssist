
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/images/logo_nbg.png';


export const MUINavBar = () => {
    const navigate = useNavigate();

    function navigateToNews(e) {
      e.preventDefault()
      navigate("/news")
    }
    function navigateToHome(e) {
        e.preventDefault()
        navigate("/home-page")
      }

    function navigateToProfile(e) {
        e.preventDefault()
        navigate("/protected")

      }
    function navigateToCall(e) {
      e.preventDefault()
      navigate("/Videocall")
    }
    function navigateToMusic(e) {
      e.preventDefault()
      navigate("/Music")
    }

      
      function navigateToMusic(e) {
        e.preventDefault()
        navigate("/Music")
      }
    

    return (
        
        <AppBar position='static' sx={{ backgroundColor: '#1e3a8a' }}>
            <Toolbar>
                <IconButton tabIndex={"-1"} size='large' edge='start' color='bg-blue-900' aria-label='logo'>
                <img src={Logo} alt='Logo' style={{ width: '40px', height: '40px', marginRight: '10px' }} />
                </IconButton>   
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>

                <Button tabIndex={"-1"} color='inherit' onClick={navigateToHome}>Home</Button>
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button tabIndex={"-1"} color='inherit' onClick={navigateToNews}>News</Button>
                    <Button tabIndex={"-1"} color='inherit' onClick={navigateToCall}>Video call</Button>
                    <Button tabIndex={"-1"} color='inherit' onClick={navigateToMusic}>Music</Button>
                    <Button tabIndex={"-1"} color='inherit'>Contact</Button>
                    <Button tabIndex={"-1"} color='inherit' onClick={navigateToProfile}>Profile</Button>

         
                
                {/* </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit' onClick={navigateToNews}>News</Button>
                    <Button color='inherit'>Call</Button>
                    
                    <Button color='inherit'>Music</Button>
                    <Button color='inherit'>Contact</Button>
                    
                    <Button color='inherit' onClick={navigateToProfile}>Profile</Button> */}

                </Stack>
            </Toolbar>
        </AppBar>
    );
};
