import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  InputBase,
  alpha,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const NavBarNews = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const navigate = useNavigate();

  function navigateToTrend(e) {
    e.preventDefault();
    navigate("/trending");
  }

  function navigateToBooks(e) {
    e.preventDefault();
    navigate("/Books");
  }

  function navigateToClimate(e) {
    e.preventDefault();
    navigate("/climate");
  }

  function navigateToEducation(e) {
    e.preventDefault();
    navigate("/education");
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
      <Toolbar>
        <IconButton
          tabIndex={"-1"}
          size="large"
          edge="start"
          color="bg-blue-900"
          aria-label="logo"
        ></IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        {/* Search bar */}
        <InputBase
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
          className="right-60"
        />
        {/* End of search bar */}
        <Stack direction="row" spacing={2}>
          <Button tabIndex={"-1"} color="inherit" onClick={navigateToNews}>
            Tin tức
          </Button>
          <Button tabIndex={"-1"} color="inherit" onClick={navigateToBooks}>
            Sách nói
          </Button>
          <Button tabIndex={"-1"} color="inherit" onClick={navigateToClimate}>
            Thời tiết
          </Button>
          <Button tabIndex={"-1"} color="inherit" onClick={navigateToEducation}>
            Học tập
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
