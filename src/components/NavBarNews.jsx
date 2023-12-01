
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/images/logo_nbg.png';


export const NavBarNews = () => {
    const navigate = useNavigate();

    // function navigateToTrend(e) {
    //   e.preventDefault()
    //   navigate("/news/trending")
    // }
    function navigateToTrend(e) {
        e.preventDefault()
        navigate("/news/trending")
      }
        function navigateToSports(e) {
            e.preventDefault()
            navigate("/news/sports")
        }   

        function navigateToClimate(e) {
            e.preventDefault()
            navigate("/news/climate")
        }
        function navigateToEducation(e) {
            e.preventDefault()
            navigate("/news/education")
        }
        function navigateToNews(e) {
            e.preventDefault()
            navigate("/news")
        }
    

    

    return (
        
        <AppBar position='static' sx={{ backgroundColor: '#1e3a8a' }}>
            <Toolbar>
                <IconButton tabIndex={"-1"} size='large' edge='start' color='bg-blue-900' aria-label='logo'>
                </IconButton>   
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>

                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button tabIndex={"-1"} color='inherit' onClick={navigateToNews}>Trending</Button>
                    <Button tabIndex={"-1"} color='inherit' onClick={navigateToSports}>Sports</Button>           
                    <Button tabIndex={"-1"} color='inherit' onClick={navigateToClimate}>Climate</Button>
                    <Button tabIndex={"-1"} color='inherit' onClick={navigateToEducation}>Education</Button>
    

         
                
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
