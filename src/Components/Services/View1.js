import { Box, Typography, IconButton, Stack } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./Services.css"

const View1 = ({ closeEvent }) => {
  return (
    <>
      <Box>
        <IconButton
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            color: "orangered",
          }}
          onClick={closeEvent}
        >
          <CloseIcon />
        </IconButton>
        <Typography align="center" variant="h4" component="h2">
          Web Designer
        </Typography>
        <Typography align="center" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.lo
          commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <Stack mt={2} direction="row" spacing={1}>
          <CheckCircleOutlineIcon
            fontSize="small"
            sx={{ color: "orangered" }}
          />
          <Typography variant="body2" component="p">
            Duis mollis, est non commodo luctus
          </Typography>
        </Stack>
        <Stack mt={2} direction="row" spacing={1}>
          <CheckCircleOutlineIcon
            fontSize="small"
            sx={{ color: "orangered" }}
          />
          <Typography variant="body2" component="p">
            Duis mollis, est non commodo luctus
          </Typography>
        </Stack>
        <Stack mt={2} direction="row" spacing={1}>
          <CheckCircleOutlineIcon
            fontSize="small"
            sx={{ color: "orangered" }}
          />
          <Typography variant="body2" component="p">
            Duis mollis, est non commodo luctus
          </Typography>
        </Stack>
        <Stack mt={2} direction="row" spacing={1}>
          <CheckCircleOutlineIcon
            fontSize="small"
            sx={{ color: "orangered" }}
          />
          <Typography variant="body2" component="p">
            Duis mollis, est non commodo luctus
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default View1;