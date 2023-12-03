import { AppBar, Toolbar, IconButton, Typography, Button, InputBase, alpha } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";

export const NavBarNews = () => {
    const navigate = useNavigate();

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
                {/* Search bar */}
                <InputBase
                    placeholder="Search..."
                    sx={{
                        color: 'inherit',
                        ml: 1,
                        flex: 1,
                        borderRadius: 4,
                        backgroundColor: alpha('#fff', 0.15),
                        '&:hover': {
                            backgroundColor: alpha('#fff', 0.25),
                        },
                        p: '8px 12px',
                    }}
                />
                {/* End of search bar */}
                <Stack direction='row' spacing={2}>
                    <Button tabIndex={"-1"} color='inherit' onClick={navigateToNews}>Trending</Button>
                    <Button tabIndex={"-1"} color='inherit' onClick={navigateToSports}>Sports</Button>           
                    <Button tabIndex={"-1"} color='inherit' onClick={navigateToClimate}>Climate</Button>
                    <Button tabIndex={"-1"} color='inherit' onClick={navigateToEducation}>Education</Button>
                </Stack>
                
            </Toolbar>
        </AppBar>
    );
};
