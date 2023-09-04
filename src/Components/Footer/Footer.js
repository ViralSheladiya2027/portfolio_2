import {
    Box,
    Grid,
    List,
    IconButton,
    Stack,
    ListItemButton,
    Typography,
  } from "@mui/material";
  import React from "react";
  import LinkedInIcon from "@mui/icons-material/LinkedIn";
  import GitHubIcon from "@mui/icons-material/GitHub";
  import TwitterIcon from "@mui/icons-material/Twitter";
  import InstagramIcon from "@mui/icons-material/Instagram";
  import "./Footer.css"
  
  const Footer = () => {
    return (
        <>
          <Box  sx={{ bgcolor: "#b23c17"}}>
            <Typography align="center" variant="h5" gutterBottom p={2}>
              EGATOR
            </Typography>
    
            <List
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid>
                <ListItemButton href="#">Home</ListItemButton>
              </Grid>
    
              <Grid>
                <ListItemButton href="#about">About</ListItemButton>
              </Grid>
    
              <Grid>
                <ListItemButton href="#service">Service</ListItemButton>
              </Grid>

              <Grid>
                <ListItemButton href="#experience">Experience</ListItemButton>
              </Grid>
    
              <Grid>
                <ListItemButton href="#portfolio">Portfolio</ListItemButton>
              </Grid>
    
              <Grid>
                <ListItemButton href="#contact">Contact</ListItemButton>
              </Grid>
            </List>
    
            <Box mt={2} justifyContent="center" display="flex">
              <Stack direction="row" spacing={2}>
                <IconButton
                  sx={{
                    border: "1px solid transparent",
                    bgcolor: "black",
                    color: "white",
                  }}
                  href="https://linkedin.com/in/sunny-patel-b516b022a"
                  aria-label="linkedin"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  sx={{
                    border: "1px solid transparent",
                    bgcolor: "black",
                    color: "white",
                  }}
                  href="http://github.com/SunnyPatel2027"
                  aria-label="github"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  sx={{
                    border: "1px solid transparent",
                    bgcolor: "black",
                    color: "white",
                  }}
                  href="https://www.instagram.com/sunnypatel_2710"
                  aria-label="instagram"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  sx={{
                    border: "1px solid transparent",
                    bgcolor: "black",
                    color: "white",
                  }}
                  aria-label="twitter"
                >
                  <TwitterIcon />
                </IconButton>
              </Stack>
            </Box>
    
            <Box m={5}justifyContent="center" display="flex">
              <Typography variant="small">
                Portfolio. All rights reserviced
              </Typography>
            </Box>
            <Box height={40} />
          </Box>
        </>
      );
  };
  
  export default Footer;