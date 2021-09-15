import React from 'react'

// Components
import Product from './Product/Product';

// Style Components
import { Grid } from '@material-ui/core'

const products = [
  { id: 1, name: 'Shoes', description: 'Running Shoes.', price: '10€', image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/350e7f3a-979a-402b-9396-a8a998dd76ab/air-force-1-07-shoe-pXTXQ8.png" },
  { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '5€', image: "https://image.shutterstock.com/image-photo/varna-bulgaria-november-03-2013-600w-272581154.jpg" },
];

const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {console.log(products)}
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products;