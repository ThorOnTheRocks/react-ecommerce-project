import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Styles Components
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/AllAmazingDealsLogo.png'

// Styles
import useStyle from './styles'

const Navbar = ({ totalItems }) => {
  const classes = useStyle();
  const location = useLocation();




  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="AllAmazingDeals" height="30px" className={classes.image} />
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                <Badge badgeContent={totalItems} color="primary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}

        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar;