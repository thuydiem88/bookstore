import classNames from 'classnames/bind';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './ProductList.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import productsData from '../productsData';

const cx = classNames.bind(styles);
function ProductList() {
    const productList = productsData.map((product) => (
        <div className={cx('product-item__wrapper')} key={product.id}>
            <div className={cx('product-item__picture')}>
                <img src={product.image} alt="Ảnh bìa sách" />
            </div>
            <div className={cx('product-item__content')}>
                <h4 className={cx('product-item__name')}>{product.title}</h4>

                <div className={cx('product-item__price')}>{product.price.toLocaleString()} đ</div>
                <div className={cx('product-item__action')}>
                    <div className={cx('product-item__action-rate')}>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className={cx('product-item__action-sold')}>Đã bán {product.rating.count}</div>
                </div>
            </div>

            <Link to={`/product/${product.id}`}>
                <a className={cx('product-item__view-product')}>
                    <span>Xem chi tiết sản phẩm</span>
                </a>
            </Link>
        </div>
    ));
    return (
        // <Grid item xs={2} sm={4} md={3}>
        <div className={cx('product-wrapper')}>{productList}</div>
        // {/* </Grid> */}
    );
}

export default ProductList;
