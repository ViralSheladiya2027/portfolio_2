import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  Box,
  Typography,
  Paper,
  Link,
  Stack,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact">
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
          <Typography variant="h3">Contact Me</Typography>
          <Divider className="head_line" />
          <Box height={5} />
          <Divider className="head_line2" />
          <Box height={25} />

          <Stack
            direction={{ xs: "column", md: "row", xl: "row" }}
            spacing={{ xs: 4, sm: 2, md: 4 }}
            // alignItems="center"
          >
            <Stack
              direction={{ xs: "column", sm: "column" }}
              spacing={{ xs: 2, sm: 2, md: 4 }}
              alignItems="center"
            >
              <Paper sx={{ bgcolor: "var(--sidenav-color)", color: "white" }}>
                <Box p={2} width={300}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MailOutlineIcon sx={{ color: "orangered" }} />
                  </div>
                  <Typography
                    mt={2}
                    variant="h6"
                    component="h6"
                    sx={{ textAlign: "center" }}
                  >
                    Email
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{ textAlign: "center" }}
                  >
                    v@gmail.com
                  </Typography>
                  <Stack
                    mt={2}
                    direction="row"
                    spacing={0.1}
                    alignItems="center"
                    justifyContent="center"
                  >
                   <Typography
                      variant="body2"
                      sx={{ color: "orangered", textAlign: "center" }}
                    >
                      Write me
                    </Typography>
                    <Link href="mailto:sunny788999@gmail.com" underline="none">
                      <ArrowRightAltIcon sx={{ color: "orangered" }} />
                    </Link>
                  </Stack>
                </Box>
              </Paper>

              <Paper sx={{ bgcolor: "var(--sidenav-color)", color: "white" }}>
                <Box p={2} width={300}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <WhatsAppIcon sx={{ color: "orangered" }} />
                  </div>
                  <Typography
                    mt={2}
                    variant="h6"
                    component="h6"
                    sx={{ textAlign: "center" }}
                  >
                    Whatsapp
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{ textAlign: "center" }}
                  >
                    88492-03645
                  </Typography>
                  <Stack
                    mt={2}
                    direction="row"
                    spacing={0.1}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "orangered", textAlign: "center" }}
                    >
                      Write me
                    </Typography>
                    <Link
                      href="https://api.whatsapp.com/send?phone=+918849203645"
                      underline="none"
                    >
                      <ArrowRightAltIcon sx={{ color: "orangered" }} />
                    </Link>
                  </Stack>
                </Box>
              </Paper>
              <Paper sx={{ bgcolor: "var(--sidenav-color)", color: "white" }}>
                <Box p={2} width={300}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <InstagramIcon sx={{ color: "orangered" }} />
                  </div>
                  <Typography
                    mt={2}
                    variant="h6"
                    component="h6"
                    sx={{ textAlign: "center" }}
                  >
                    Instagram
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{ textAlign: "center" }}
                  >
                    v@gmail.com
                  </Typography>
                  <Stack
                    mt={2}
                    direction="row"
                    spacing={0.1}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "orangered", textAlign: "center" }}
                    >
                      Write me
                    </Typography>
                    <Link
                      href="https://www.instagram.com/sunnypatel_2710"
                      underline="none"
                    >
                      <ArrowRightAltIcon sx={{ color: "orangered" }} />
                    </Link>
                  </Stack>
                </Box>
              </Paper>
            </Stack>
            <Stack
              component="form"
              spacing={2}
              autoComplete="off"
              //   ref={form}
              //   onSubmit={sendEmail}
            >
              <TextField
                name="name"
                label="Your Full Name"
                size="small"
                focused
                type="text"
                sx={{
                  width: 370,
                  input: { color: "white" },
                  label: {
                    color: "#ffffff",
                  },
                  // border:"1px solid white"
                }}
                required
              />

              <TextField
                name="email"
                label="Your Email"
                focused
                size="small"
                type="email"
                sx={{
                  width: 370,
                  input: { color: "white" },
                  label: {
                    color: "#ffffff",
                  },
                }}
                required
              />
              <TextField
                sx={{
                  width: 370,
                  label: {
                    color: "#ffffff",
                  },
                }}
                inputProps={{
                  style: {
                    color: "white",
                  },
                }}
                label="Your Message"
                focused
                size="small"
                variant="outlined"
                name="message"
                multiline
                rows={4}
                required
              />
              <Button
                variant="contained"
                type="submit"
                sx={{
                  textTransform: "capitalize",
                  width: 175,
                  bgcolor: "var(--button-color)",
                  mb: 5,
                }}
                className="btn"
              >
                Send Message
              </Button>
            </Stack>
          </Stack>
        </Box>
      </section>
    </>
  );
};

export default Contact;
