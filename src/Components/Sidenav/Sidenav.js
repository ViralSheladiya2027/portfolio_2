import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import PersonIcon from "@mui/icons-material/Person";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import "./Sidenav.css";

const drawerWidth = 240;

export default function Sidenav() {
  const [value, setValue] = React.useState("#");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const drawer = (
    <div className="drawer">
      <Typography variant="h4" mt={4} className="typography">
        Portfolio
      </Typography>

      <Box height={80} />
      <List onChange={handleChange} value={value}>
        <ListItem>
          <ListItemButton
            href="#"
            style={{ color: value === "#" ? "orangered" : "" }}
            onClick={(event) => handleChange(event, "#")}
          >
            <ListItemIcon>
              <HomeIcon
                className="drawer_icon"
                style={{ color: value === "#" ? "orangered" : "" }}
                onClick={(event) => handleChange(event, "#")}
              />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <Divider
          variant="middle"
          className="divider"
        />
        <ListItem>
          <ListItemButton
            href="#about"
            style={{ color: value === "#about" ? "orangered" : "" }}
            onClick={(event) => handleChange(event, "#about")}
          >
            <ListItemIcon>
              <PersonIcon
                className="drawer_icon"
                style={{ color: value === "#about" ? "orangered" : "" }}
                onClick={(event) => handleChange(event, "#about")}
              />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <Divider
          variant="middle"
          className="divider"
        />
        <ListItem>
          <ListItemButton
            href="#services"
            style={{ color: value === "#services" ? "orangered" : "" }}
            onClick={(event) => handleChange(event, "#services")}
          >
            <ListItemIcon>
              <WorkHistoryOutlinedIcon
                className="drawer_icon"
                style={{ color: value === "#services" ? "orangered" : "" }}
                onClick={(event) => handleChange(event, "#services")}
              />
            </ListItemIcon>
            <ListItemText primary="Services" />
          </ListItemButton>
        </ListItem>
        <Divider
          variant="middle"
          className="divider"
        />
        <ListItem>
          <ListItemButton
            href="#experience"
            style={{ color: value === "#experience" ? "orangered" : "" }}
            onClick={(event) => handleChange(event, "#experience")}
          >
            <ListItemIcon>
              <MenuBookIcon
                className="drawer_icon"
                style={{ color: value === "#experience" ? "orangered" : "" }}
                onClick={(event) => handleChange(event, "#experience")}
              />
            </ListItemIcon>
            <ListItemText primary="Experience" />
          </ListItemButton>
        </ListItem>
        <Divider
          variant="middle"
          className="divider"
        />
        <ListItem>
          <ListItemButton
            href="#portfolio"
            style={{ color: value === "#portfolio" ? "orangered" : "" }}
            onClick={(event) => handleChange(event, "#portfolio")}
          >
            <ListItemIcon>
              <BusinessCenterIcon
                className="drawer_icon"
                style={{ color: value === "#portfolio" ? "orangered" : "" }}
                onClick={(event) => handleChange(event, "#portfolio")}
              />
            </ListItemIcon>
            <ListItemText primary="Portfolio" />
          </ListItemButton>
        </ListItem>
        <Divider
          variant="middle"
          className="divider"
        />
        <ListItem>
          <ListItemButton
            href="#contact"
            style={{ color: value === "#contact" ? "orangered" : "" }}
            onClick={(event) => handleChange(event, "#contact")}
          >
            <ListItemIcon>
              <MessageIcon
                className="drawer_icon"
                style={{ color: value === "#contact" ? "orangered" : "" }}
                onClick={(event) => handleChange(event, "#contact")}
              />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
        <Divider
          variant="middle"
          className="divider"
        />
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            mr: 2,
            color: "orangered",
            position: "fixed",
            display: { sm: "none" },
            border: "2px solid orangered",
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
