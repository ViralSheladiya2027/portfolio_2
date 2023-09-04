import {
  Box,
  Typography,
  Divider,
  Stack,
  LinearProgress,
  Icon,
  CircularProgress,
} from "@mui/material";
import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <>
      <section id="experience">
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
          <Typography variant="h3">Experience</Typography>
          <Divider className="head_line" />
          <Box height={5} />
          <Divider className="head_line2" />
          <Box height={25} />
          <Stack
            direction={{ xs: "column", md: "row", xl: "row" }}
            spacing={{ xs: 2, sm: 4, md: 8 }}
            m={2}
          >
            <Box p={2} height={360} width={360}>
              <Typography variant="h5" align="center">
                <span style={{ textDecoration: "underline" }}>
                  Technical Skills
                </span>
              </Typography>
              <Box height={30} />

              <Stack direction="column" mb={2}>
                <Icon className="bx bxl-flutter" style={{ color: "#30B8F6" }} />
                <Stack direction="row" spacing={30}>
                  <span>Flutter</span>
                  <span>95%</span>
                </Stack>
                <LinearProgress
                  sx={{ color: "orangered" }}
                  variant="determinate"
                  value={95}
                />
              </Stack>
              <Stack direction="column" mb={2}>
                <Icon className="bx bxl-Dart" style={{ color: "#04599C" }} />
                <Stack direction="row" spacing={30}>
                  <span>Dart</span>
                  <span>95%</span>
                </Stack>
                <LinearProgress
                  sx={{ color: "orangered" }}
                  variant="determinate"
                  value={95}
                />
              </Stack>
              <Stack direction="column" mb={2}>
                <Icon
                  className="bx bxl-node"
                  style={{ color: "#F0DC4E" }}
                />
                <Stack direction="row" spacing={14}>
                  <span>Node Js</span>
                  <span>80%</span>
                </Stack>
                <LinearProgress
                  sx={{ color: "orangered" }}
                  variant="determinate"
                  value={80}
                />
              </Stack>
              <Stack direction="column" mb={2}>
                <Icon className="bx bxl-react" style={{ color: "#00D8FF" }} />
                <Stack direction="row" spacing={25}>
                  <span>React Js</span>
                  <span>75%</span>
                </Stack>
                <LinearProgress
                  sx={{ color: "orangered" }}
                  variant="determinate"
                  value={75}
                />
              </Stack>
            </Box>

            <Box p={2} height={360} width={360}>
              <Typography variant="h5" align="center">
                <span style={{ textDecoration: "underline" }}>
                  Professional Skills
                </span>
              </Typography>
              <Box height={40} />

              <Stack direction="row" spacing={8}>
                <div>
                  <Box sx={{ position: "relative", display: "inline-flex" }}>
                    <CircularProgress
                      size={60}
                      sx={{ color: "orangered" }}
                      variant="determinate"
                      value={80}
                    />
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="caption"
                        component="div"
                        color="white"
                      >
                        80%
                      </Typography>
                    </Box>
                  </Box>
                  <Typography mt={2}>Toartwork</Typography>
                </div>
                <Box height={25} />
                <div>
                  <Box sx={{ position: "relative", display: "inline-flex" }}>
                    <CircularProgress
                      size={60}
                      sx={{ color: "orangered" }}
                      variant="determinate"
                      value={70}
                    />
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="caption"
                        component="div"
                        color="white"
                      >
                        70%
                      </Typography>
                    </Box>
                  </Box>
                  <Typography mt={2}>Problem Solving</Typography>
                </div>
              </Stack>
              <Box height={25} />
              <Stack direction="row" spacing={8}>
                <div>
                  <Box sx={{ position: "relative", display: "inline-flex" }}>
                    <CircularProgress
                      size={60}
                      sx={{ color: "orangered" }}
                      variant="determinate"
                      value={90}
                    />
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="caption"
                        component="div"
                        color="white"
                      >
                        90%
                      </Typography>
                    </Box>
                  </Box>
                  <Typography mt={2}>Creativity</Typography>
                </div>
                <Box height={25} />
                <div>
                  <Box sx={{ position: "relative", display: "inline-flex" }}>
                    <CircularProgress
                      size={60}
                      sx={{ color: "orangered" }}
                      variant="determinate"
                      value={65}
                    />
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="caption"
                        component="div"
                        color="white"
                      >
                        65%
                      </Typography>
                    </Box>
                  </Box>
                  <Typography mt={2}>Communication</Typography>
                </div>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </section>
    </>
  );
};

export default Experience;
