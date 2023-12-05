import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  InputBase,
  alpha,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const NavBarNews = () => {
  const navigate = useNavigate();

  function navigateToRadio(e) {
    e.preventDefault();
    navigate("/Radio");
  }

  function navigateToBooks(e) {
    e.preventDefault();
    navigate("/Books");
  }

  function navigateToSports(e) {
    e.preventDefault();
    navigate("/Sports");
  }

  function navigateToEducation(e) {
    e.preventDefault();
    navigate("/Education");
  }

  function navigateToNews(e) {
    e.preventDefault();
    navigate("/news");
  }

  return (
    <AppBar
      position="static"
      // sx={{ backgroundColor: "#1e6f8a" }}
      color="info"
      className="rounded-b-full"
    >
      <Toolbar tabIndex={"-1"}>
        <IconButton
          tabIndex={"-1"}
          size="large"
          edge="start"
          color="bg-blue-900"
          aria-label="logo"
        ></IconButton>
        <Typography
          tabIndex={"-1"}
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        {/* Search bar */}
        <InputBase
          tabIndex={"-1"}
          placeholder="Search..."
          sx={{
            color: "inherit",
            ml: 1,
            flex: 1,
            borderRadius: 4,
            backgroundColor: alpha("#fff", 0.15),
            "&:hover": {
              backgroundColor: alpha("#fff", 0.25),
            },
            p: "8px 12px",
          }}
        />
        {/* End of search bar */}
        <Stack direction="row" spacing={2}>
          <Button tabIndex={"-1"} color="inherit" onClick={navigateToNews}>
            Tin tức
          </Button>
          <Button tabIndex={"-1"} color="inherit" onClick={navigateToBooks}>
            Sách nói
          </Button>
          <Button tabIndex={"-1"} color="inherit" onClick={navigateToEducation}>
            Học tập
          </Button>
          <Button tabIndex={"-1"} color="inherit" onClick={navigateToRadio}>
            Âm nhạc
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
