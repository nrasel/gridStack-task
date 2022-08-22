import type { NextPage } from "next";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import List from "@mui/material/List";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import crown from "../public/image/crown.png";
import avatar from "../public/image/elipse.png";

const drawerWidth = 115;

interface Props {
  window?: () => Window;
}

const Home: NextPage = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Image
        src={crown}
        alt="Picture of the author"
        width={70}
        height={70}
        style={{ margin: "auto" }}
      />

      <List>
        <div
          style={{
            background: "#E2BC82",
            height: "70px",
            width: "100px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <DashboardIcon style={{ color: "#FFFFFF" }} />
          <p style={{ margin: "0px" }}>Dashboard</p>
        </div>
      </List>

      <List>
        <div
          style={{
            height: "70px",
            width: "100px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            color: "#FFFFFF",
          }}
        >
          <ShoppingCartIcon  />
          <p style={{ margin: "0px" }}>Orders</p>
        </div>
      </List>

      <List>
        <div
          style={{
            height: "70px",
            width: "100px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            color: "#FFFFFF",
          }}
        >
          <ShoppingBagIcon />
          <p style={{ margin: "0px" }}>Products</p>
        </div>
      </List>

      <List>
        <div
          style={{
            height: "70px",
            width: "100px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            color: "#FFFFFF",
          }}
        >
          <PeopleOutlineIcon />
          <p style={{ margin: "0px" }}>Customers</p>
        </div>
      </List>

      <List>
        <div
          style={{
            height: "70px",
            width: "100px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            color: "#FFFFFF",
          }}
        >
          <ThumbUpOffAltIcon  />
          <p style={{ margin: "0px" }}>Reviews</p>
        </div>
      </List>

      <List>
        <div
          style={{
            height: "70px",
            width: "100px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            color: "#FFFFFF",
          }}
        >
          <LocalShippingIcon  />
          <p style={{ margin: "0px" }}>Shipping</p>
        </div>
      </List>

      <List>
        <div
          style={{
            height: "70px",
            width: "100px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            color: "#FFFFFF",
          }}
        >
          <BarChartIcon />
          <p style={{ margin: "0px" }}>Analytics</p>
        </div>
      </List>

      <List>
        <div
          style={{
            height: "70px",
            width: "100px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            color: "#FFFFFF",
          }}
        >
          <NotificationsNoneIcon  />
          <p style={{ margin: "0px" }}>Notification</p>
        </div>
      </List>

      <List>
        <div
          style={{
            height: "70px",
            width: "100px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            color: "#FFFFFF",
          }}
        >
          <SettingsIcon />
          <p style={{ margin: "0px" }}>Settings</p>
        </div>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#FFFFFF",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div style={{ color: "#292929" }}>Hello John Doe 👋</div>
            <div>
              <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <input style={{border:'black',background:'#FFFFFF',color:'#D2D2D2'}} type="text" />
                <NotificationsNoneIcon style={{color:'#E2BC82'}} />
                <Image src={avatar} alt="avatar" />
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              backgroundColor: "#2e3345",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              backgroundColor: "#2e3345",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <div style={{display:'flex'}}>
          <div style={{display:'flex'}}>
          <div>
          <h1>hello1</h1>
          </div>
          <div>
          <h1>hello2</h1>
          </div>
          </div>
          <div>
            <h1>hello</h1>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Home;
