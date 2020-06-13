import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { Button, Collapse, ListItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.text.secondary,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%'
  },
  buttonLeaf: {
    color: theme.palette.text.secondary,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      '& $title': {
        fontWeight: theme.typography.fontWeightMedium
      }
    }
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  title: {
    marginRight: 'auto'
  },
  active: {
    color: theme.palette.secondary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& $icon': {
      color: theme.palette.secondary.main
    }
  }
}));

function NavItem(props) {
  const classes = useStyles();
  let { icon: Icon } = props;
  return (
    <ListItem
      className={clsx(classes.itemLeaf, props.className)}
      disableGutters
      key={props.title}
      {...props.rest}
    >
      <Button
        activeClassName={classes.active}
        className={clsx(classes.buttonLeaf)}
        component={RouterLink}
        exact
        style={{ paddingLeft: 8 }}
        to={props.href}
      >
        {Icon && <Icon className={classes.icon} size="20" />}
        <span className={classes.title}>{props.title}</span>
      </Button>
    </ListItem>
  );
}

export default NavItem;
