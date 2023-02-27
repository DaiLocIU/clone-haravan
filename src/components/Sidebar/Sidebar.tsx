import { FC } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from 'tss-react/mui';
import sidebarObj from "../../mapSidebar";
import SidebarList from "./SidebarList";

type OwnProps = {
    drawerWidth: number,
    mobileOpen?: boolean,
    handleDrawerToggle: NoneToVoidFunction,
}

const useStyles = makeStyles()((theme) => {
  return {
    sidebar: {
      background: '#0d3064',
      height: '100%',
      minHeight: '100%',
      boxShadow: '0 0 15px rgb(38 50 56 / 10%)',
    },
    root: {
      color: theme.palette.primary.main,
    },
    apply: {
      marginRight: theme.spacing(2),
    },
  };
});

const Sidebar: FC<OwnProps> = ({
   drawerWidth,
   mobileOpen,
   handleDrawerToggle
}) => {
  const { classes } = useStyles()
  const drawer = (
    <div className={classes.sidebar}>
      <Toolbar />
      <Divider />
      {Array.isArray(sidebarObj) && sidebarObj.map((sidebarList, index) => (
        <SidebarList 
          title={sidebarList.title}
          items={sidebarList.items}
          index={index}
          sidebarLength={sidebarObj.length}
          key={index}
        />
      ))}
    </div>
  );
    return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
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

export default Sidebar;
