import React from 'react';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';

// Styled Component
import { Button, Container, Grid, Typography } from '@material-ui/core';

// Styles
import useStyle from './styles'


const Cart = ({ cart, handleUpdateCartQty, handleRemoveItemFromCart, handleEmptyCart }) => {
  const classes = useStyle();



  const EmptyCart = () => {
    return (
      <>
        <Typography
          variant="subtitle1">
          You have no items in your shopping cart,
          <Link to="/" className={classes.link}>start adding some</Link>
          !
        </Typography>
      </>
    )
  }

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveCartItem={handleRemoveItemFromCart} />
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography variant="h4">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>

          <div>
            <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
            <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>

          </div>
        </div>
      </>
    )
  }

  if (!cart.line_items) return 'Loading...'

  return (
    <Container className={classes.container}>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4" gutterBottom>Your Shopping Cart</Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}

export default Cart;
