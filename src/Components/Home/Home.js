import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Sidenav from "../Sidenav/Sidenav";
import me from "../image/me.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Sidenav />
      <section id="#">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Box
            component="main"
            sx={{
              display: "flex",
              flexDirection: "column",
              flexgrow: 1,
              p: 3,
              width: "100%",
            }}
          >
            <Typography className="home_typography" variant="h4">
              Hello, {""}my name is{" "}
              <span className="name">Sunny Gadhiya</span>
            </Typography>
            <br />
            <Typography className="home_typography2" variant="h4">
              I'm a <span className="name">Flutter Developer</span>{" "}
            </Typography>
            <br />
            <Typography variant="h6">
              i'm a Flutter Developer with extensive experience for over 1.2+
              years. My expertise is to create and mobile application development, and
              many more...
            </Typography>
            <Box height={40} />
            <button className="button">
              <a
                href="#about"
                style={{ color: "white", textDecoration: "none" }}
              >
                More About Me
              </a>
            </button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexgrow: 1,
              alignItems: "center",
              p: 3,
            }}
          >
            <img alt="me" className="me" src={me} />
          </Box>
        </Stack>
      </section>
    </>
  );
};

export default Home;
