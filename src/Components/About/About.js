import React from "react";
import "./About.css";
// import Sidenav from "../Sidenav/Sidenav";
import PeopleIcon from "@mui/icons-material/People";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Box, Divider, Stack, Typography } from "@mui/material";
import CV from "../image/CV.pdf";

const About = () => {
  return (
    <>
      {/* <Sidenav/> */}
      <section id="about">
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
          <Typography variant="h3">About Me</Typography>
          <Divider className="head_line" />
          <Box height={5} />
          <Divider className="head_line2" />
          <Box height={25} />
          <Typography className="home_typography" variant="h4">
            I'm Sunny Gadhiya and{" "}
            <span className="typing">Flutter Developer</span>{" "}
          </Typography>
          <br />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            alignItems="center"
          >
            <button className="button">
              <Box p={2} width={160}>
                <Typography variant="h6" component="h6">
                  Experience
                </Typography>
                <WorkspacePremiumIcon />
                <Typography variant="body2" component="p">
                  1.5+ Years Working
                </Typography>
              </Box>
            </button>

            <button className="button">
              <Box p={2} width={160}>
                <Typography variant="h6" component="h6">
                  Clients
                </Typography>
                <PeopleIcon />
                <Typography variant="body2" component="p">
                  300+ Workwide
                </Typography>
              </Box>
            </button>

            <button className="button">
              <Box p={2} width={160}>
                <Typography variant="h6" component="h6">
                  Projects
                </Typography>
                <WorkHistoryIcon />
                <Typography variant="body2" component="p">
                  80+ Completed
                </Typography>
              </Box>
            </button>
          </Stack>
          <Box height={40} />

          <Typography variant="h6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum aut
            eveniet maxime necessitatibus alias repellat quasi ex neque. Nobis
            aut tempore consectetur a quisquam eum non rerum aperiam dicta!
            Architecto odit temporibus maxime error itaque voluptatum molestias!
            Pariatur exercitationem consectetur blanditiis voluptas namv maxime
            error itaque ...
          </Typography>
          <Box height={40} />
          <Stack direction="row" spacing={2}>
            <button className="button">
              <a
                download
                href={CV}
                style={{ color: "white", textDecoration: "none" }}
              >
                Download CV
              </a>
            </button>
            <button className="button">
              <a
                href="#contact"
                style={{ color: "white", textDecoration: "none" }}
              >
                Hire Me
              </a>
            </button>
          </Stack>
        </Box>
      </section>
    </>
  );
};

export default About;
