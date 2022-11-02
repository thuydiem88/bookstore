import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Cart() {
    let cart = JSON.parse(localStorage.getItem('CART'));

    let cartEmpty = true;
    if (localStorage.getItem('CART') == null) {
        cartEmpty = true;
    } else {
        cartEmpty = false;
    }
    let countItemsCart = 0;

    console.log('countItem', countItemsCart);

    return (
        <>
            {cartEmpty ? (
                <HeadlessTippy
                    placement="bottom-end"
                    interactive //cho phép select
                    offset={[30, 10]}
                    // visible={cartResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('cart-results')} tabIndex="-1" {...attrs}>
                            <PopperWrapper className={cx('cart-popper')}>
                                <div className={cx('empty')}>
                                    <img src={images.empty} alt="" />
                                    <h4>Chưa có sản phẩm</h4>
                                    <Link to="/"></Link>
                                </div>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <Link to="/cart">
                        <div className={cx('cart')}>
                            {/* <CartIcon /> */}
                            {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                            <img className={cx('cart-img')} src={images.cart} alt="cart" />
                            {/* {cart ? <button className={cx('badge')}>{cart.length}</button> : '0'} */}
                            {/* <span>{size}</span> */}
                            <button className={cx('badge')}>{cart != null ? cart.length : 0}</button>
                        </div>
                    </Link>
                </HeadlessTippy>
            ) : (
                <HeadlessTippy
                    placement="bottom-end"
                    interactive //cho phép select
                    offset={[30, 10]}
                    // visible={cartResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('cart-results')} tabIndex="-1" {...attrs}>
                            <PopperWrapper className={cx('cart-popper')}>
                                <span className={cx('title')}>Sản phẩm mới thêm</span>

                                {/* <CartItem /> */}
                                <div className={cx('product-wrapper')}>
                                    {cart.map((product) => (
                                        <Link to={`/product/${product.id}`}>
                                            <div className={cx('item-wrapper')}>
                                                <img
                                                    className={cx('item-product-img')}
                                                    src={product.image}
                                                    alt="product-img"
                                                />
                                                <div className={cx('item-info')}>
                                                    <span className={cx('item-name')}>{product.title}</span>
                                                    <span className={cx('item-price')}>
                                                        {product.price.toLocaleString()} đ
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <Link to="/cart">
                                    <span className={cx('view-cart')}>
                                        <Button primary className={cx('view-cart-btn')}>
                                            Xem giỏ hàng
                                        </Button>
                                    </span>
                                </Link>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <Link to="/cart">
                        <div className={cx('cart')}>
                            {/* <CartIcon /> */}
                            {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                            <img className={cx('cart-img')} src={images.cart} alt="cart" />
                            {/* <span>{size}</span> */}
                            <button className={cx('badge')}>{cart != null ? cart.length : 0}</button>

                            {/* <button className={cx('badge')}>10</button> */}
                        </div>
                    </Link>
                </HeadlessTippy>
            )}
        </>
    );
}

export default Cart;
