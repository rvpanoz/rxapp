import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListIcon from "@material-ui/icons/List";
import AddIcon from "@material-ui/icons/Add";

function Menu(props) {
  return (
    <React.Fragment>
      <ListItem>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary={<Link to="/">Todos</Link>} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary={<Link to="/create">Add todo</Link>} />
      </ListItem>
    </React.Fragment>
  );
}

function Header({ open, classes, handleDrawerClose, handleDrawerOpen }) {
  return (
    <React.Fragment>
      <AppBar
        position="absolute"
        className={classnames(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar disableGutters={!open} className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={e => handleDrawerOpen(e)}
            className={classnames(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="title"
            color="inherit"
            noWrap
            className={classes.title}
          >
            RXTodos
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classnames(
            classes.drawerPaper,
            !open && classes.drawerPaperClose
          )
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={e => handleDrawerClose(e)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <Menu />
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default withStyles(styles)(Header);
