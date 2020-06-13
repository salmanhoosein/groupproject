/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useLocation } from "react-router";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  makeStyles,
} from "@material-ui/core";
import { User, Briefcase } from "react-feather";
import NavItem from "./NavItem";

const navConfig = [
  {
    title: "Profiles",
    icon: User,
    href: "/app/profiles",
  },
  {
    title: "Fuel Quote",
    icon: Briefcase,
    href: "/app/fuelquote",
  },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: "calc(100% - 64px)",
  },
}));

function NavBar({ openMobile, onMobileClose }) {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Divider />
        <Box p={2}>
          <List>
            {navConfig.map((config) => {
              return (
                <NavItem
                  href={config.href}
                  icon={config.icon}
                  key={config.href}
                  title={config.title}
                />
              );
            })}
          </List>
        </Box>
        <Divider />
      </PerfectScrollbar>
    </Box>
  );
  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
}

export default NavBar;
