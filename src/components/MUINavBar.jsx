import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo_nbg.png";

export const MUINavBar = () => {
  const navigate = useNavigate();

  function navigateToNews(e) {
    e.preventDefault();
    navigate("/news");
  }
  function navigateToHome(e) {
    e.preventDefault();
    navigate("/home-page");
  }

  function navigateToProfile(e) {
    e.preventDefault();
    navigate("/protected");
  }
  function navigateToCall(e) {
    e.preventDefault();
    navigate("/Videocall");
  }
  function navigateToMusic(e) {
    e.preventDefault();
    navigate("/Music");
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1e3a8a" }}>
      <Toolbar>
        <IconButton
          tabIndex={"-1"}
          size="large"
          edge="start"
          color="bg-blue-900"
          aria-label="logo"
          className="w-30"
        >
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <IconButton
            tabIndex={"-1"}
            color="inherit"
            onClick={navigateToHome}
            className="h-10"
          >
            <img src="src\assets\images\logoV.png" alt="" />
          </IconButton>
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button tabIndex={"-1"} color="inherit" onClick={navigateToHome}>
            Trang chủ
          </Button>
          <Button tabIndex={"-1"} color="inherit" onClick={navigateToNews}>
            Thư viện nói
          </Button>
          <Button tabIndex={"-1"} color="inherit" onClick={navigateToCall}>
            Xã hội
          </Button>
          <Button tabIndex={"-1"} color="inherit">
            Thông tin
          </Button>
          <Button tabIndex={"-1"} color="inherit" onClick={navigateToProfile}>
            Tài khoản
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
