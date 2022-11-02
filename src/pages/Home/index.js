import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import React, { useState } from 'react';
import Collection from '~/layouts/components/Collection';

import { Grid } from '@mui/material';
import ProductList from '~/components/ProductList';
import productsData from '~/components/productsData';
import Filter from '~/layouts/components/Filter';
import Slider from '~/layouts/components/Slider';

const cx = classNames.bind(styles);

function Home() {
    // const [filtered, setFiltered] = useState([]);
    const [activeCategory, setActiveCategory] = useState([]);

    var cart = JSON.parse(localStorage.getItem('CART')) || [];

    let countItems = 0;

    //add to cart
    const addToCart = (id) => {
        //check if product already exist in cart
        if (cart.some((item) => item.id === id)) {
            // alert('Product in cart');
        } else {
            const item = productsData.find((product) => product.id === id);
            cart.push({
                ...item,
                quantityInCart: 1,
            });
            console.log(cart);
            countItems++;
        }
        // updateCart();
        localStorage.setItem('CART', JSON.stringify(cart));
        window.location.reload();
        console.log(countItems, 'count');
        return countItems;
    };
    // localStorage.setItem('CountItems', JSON.stringify(countItems));

    return (
        <>
            <Slider />
            <div className={cx('wrapper')}>
                <h3 className={cx('header-feature')}>Featured Product</h3>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} mr={2}>
                    <Grid item xs={2}>
                        <Filter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                    </Grid>
                    <Grid item container xs={10} p={2} md={10}>
                        <Grid item xs={12} p={2} md={12}>
                            <ProductList addToCart={addToCart} />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <Collection addToCart={addToCart} />
            {/* cart={cart} setCart={setCart} */}
        </>
    );
}

export default Home;
