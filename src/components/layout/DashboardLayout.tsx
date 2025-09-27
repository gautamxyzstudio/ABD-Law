import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
} from "@mui/material";
import {
  LibraryBooks as BlogIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { useAuthStore } from "../../store/authStore";
import CustomLogo from "../logo/Logo";
import React from "react";

const drawerWidth = 240;

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const menuItems = [
  // {
  //   text: "Manage Services",
  //   icon: <ServicesIcon />,
  //   path: "/manage-services",
  // },

  {
    text: "Manage Blogs",
    icon: <BlogIcon />,
    path: "/manage-blogs",
  },
];

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const { logout } = useAuthStore.getState();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const drawer = (
    <div>
      <Toolbar
        sx={{ justifyContent: "center", mt: 1, pb: 2 }}
        className="shadow"
      >
        <Link to="/">
          <CustomLogo imgStyle="w-15 h-15" fontStyle="text-base" />
        </Link>
      </Toolbar>
      <List sx={{ mt: 2 }}>
        {menuItems.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{ color: "#fff" }}
                selected={location.pathname.includes(item.path)}
                onClick={() => {
                  navigate(item.path);
                  setMobileOpen(false);
                }}
              >
                <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </React.Fragment>
        ))}
        <Divider sx={{ my: 2 }} />
        <ListItem disablePadding>
          <ListItemButton sx={{ color: "#fff" }} onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText onClick={handleLogout} primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex", scrollbarColor: "red" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
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
              width: drawerWidth,
              backgroundColor: "primary.light",
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
          scrollbarColor: "red",
          p: 3,
          backgroundColor: "#f6f6f6",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
