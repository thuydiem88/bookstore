import classNames from 'classnames/bind';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import GridLayout from 'react-grid-layout';

import styles from './ProductItem.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import productsData from '../productsData';

const cx = classNames.bind(styles);

function ProductItem(props) {
    const { addToCart } = props;

    const productsFilterUp = productsData.filter((product) => product.id <= 5);
    const productCollectionUp = productsFilterUp.map((product) => (
        <div className={cx('product-item')} key={product.id}>
            <img src={product.image} alt="" />
            <div className={cx('product-info')}>
                <div className={cx('arrow')}></div>
                <h3 className={cx('name')}>{product.title}</h3>
                <h4 className={cx('price')}>{product.price.toLocaleString()} đ</h4>
                <Button
                    // onClick={() => handleClick(product)}
                    onClick={() => addToCart(product.id)}
                    primary
                    rightIcon={<FontAwesomeIcon icon={faCartShopping} />}
                >
                    Add to cart
                </Button>
            </div>
        </div>
    ));
    const productsFilterDown = productsData.filter((product) => product.id > 10 && product.id <= 15);
    const productCollectionDown = productsFilterDown.map((product) => (
        <div className={cx('product-item')} key={product.id}>
            <img src={product.image} alt="" />
            <div className={cx('product-info')}>
                <div className={cx('arrow')}></div>
                <h3 className={cx('name')}>{product.title}</h3>
                <h4 className={cx('price')}>{product.price.toLocaleString()} đ</h4>
                <Button
                    onClick={() => addToCart(product.id)}
                    primary
                    rightIcon={<FontAwesomeIcon icon={faCartShopping} />}
                >
                    Add to cart
                </Button>
            </div>
        </div>
    ));
    return (
        <>
            <div className={cx('wrapper-up')}>{productCollectionUp}</div>
            <div className={cx('wrapper-down')}>{productCollectionDown}</div>
        </>
    );
}

export default ProductItem;
