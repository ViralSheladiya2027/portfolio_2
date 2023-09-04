import React, { useState } from "react";
import "./Services.css";
import { Box, Divider, Modal, Paper, Stack, Typography } from "@mui/material";
// import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import View1 from "./View1";
import View2 from "./View2";
import View3 from "./View3";
import WebIcon from '@mui/icons-material/Web';
import CodeOffIcon from "@mui/icons-material/CodeOff";
import InstallMobileIcon from '@mui/icons-material/InstallMobile';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 380,
  bgcolor: "var(--sidenav-color)",
  border: "2px solid var(--themecolor)",
  boxShadow: 24,
  p: 4,
};

const Services = () => {
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [open3, setOpen3] = useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  return (
    <>
      <div>
        <Modal
          open={open1}
          // onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <View1 closeEvent={handleClose1} />
          </Box>
        </Modal>
        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <View2 closeEvent={handleClose2} />
          </Box>
        </Modal>
        <Modal
          open={open3}
          onClose={handleClose3}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <View3 closeEvent={handleClose3} />
          </Box>
        </Modal>
      </div>
      <section id="services">
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
          <Typography variant="h3">Services</Typography>
          <Divider className="head_line" />
          <Box height={5} />
          <Divider className="head_line2" />
          <Box height={25} />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 2, md: 4 }}
            alignItems="center"
          >
            <Paper sx={{ bgcolor: "var(--sidenav-color)", color: "white" }}>
              <Box p={3} width={200}>
                <WebIcon sx={{ color: "orangered" }} />
                <Typography mt={2} variant="h6" component="h6">
                  Web Developer
                </Typography>
                <Stack mt={2} direction="row" spacing={1}>
                  <Typography
                    variant="body2"
                    sx={{ color: "orangered" }}
                    component="p"
                  >
                    View more
                  </Typography>
                  <ArrowRightAltIcon
                    onClick={handleOpen1}
                    sx={{ color: "orangered" }}
                  />
                </Stack>
              </Box>
            </Paper>

            <Paper sx={{ bgcolor: "var(--sidenav-color)", color: "white" }}>
              <Box p={3} width={200}>
                <CodeOffIcon  sx={{ color: "orangered" }} />
                <Typography mt={2} variant="h6" component="h6">
                  UI/UX Designer
                </Typography>
                <Stack mt={2} direction="row" spacing={1}>
                  <Typography
                    variant="body2"
                    sx={{ color: "orangered" }}
                    component="p"
                  >
                    View more
                  </Typography>
                  <ArrowRightAltIcon
                    onClick={handleOpen2}
                    sx={{ color: "orangered" }}
                  />
                </Stack>
              </Box>
            </Paper>
            <Paper sx={{ bgcolor: "var(--sidenav-color)", color: "white" }}>
              <Box p={3} width={200}>
                <InstallMobileIcon  sx={{ color: "orangered" }} />
                <Typography mt={2} variant="h6" component="h6">
                Mobile  App 
                </Typography>
                <Stack mt={2} direction="row" spacing={1}>
                  <Typography
                    variant="body2"
                    sx={{ color: "orangered" }}
                    component="p"
                  >
                    View more
                  </Typography>
                  <ArrowRightAltIcon
                    onClick={handleOpen3}
                    sx={{ color: "orangered" }}
                  />
                </Stack>
              </Box>
            </Paper>
          </Stack>
        </Box>
      </section>
    </>
  );
};

export default Services;
