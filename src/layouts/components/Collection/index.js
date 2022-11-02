import classNames from 'classnames/bind';
import React, { useState, useEffect, useParams } from 'react';
import GridLayout from 'react-grid-layout';

import styles from './Collection.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Grid } from '@mui/material';
import ProductItem from '~/components/ProductItem';
import productsData from '~/components/productsData';

const cx = classNames.bind(styles);

function Collection(props) {
    const { addToCart } = props;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3>Book Collection</h3>
            </div>

            <div className={cx('product-list')}></div>
            <div className={cx('product-list')}>
                <ProductItem addToCart={addToCart} />
            </div>
        </div>
    );
}

export default Collection;
