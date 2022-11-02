import classNames from 'classnames/bind';
import styles from './CartPage.module.scss';
import images from '~/assets/images';

import React, { useState, useEffect } from 'react';
import GridLayout from 'react-grid-layout';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import productsData from '~/components/productsData';

const cx = classNames.bind(styles);

function CartPage() {
    let cartEmpty = true;
    if (localStorage.getItem('CART') == null) {
        cartEmpty = true;
    } else {
        cartEmpty = false;
    }

    let cart = JSON.parse(localStorage.getItem('CART'));
    console.log('cart', cart);

    const changeNumber = (action, id) => {
        cart = cart.map((item) => {
            let quantityInCart = item.quantityInCart;
            if (item.id === id) {
                if (action === 'minus') {
                    quantityInCart--;
                    // console.log(quantityInCart, 'trừ');
                } else if (action === 'plus') {
                    quantityInCart++;
                    // console.log(quantityInCart, 'cộng');
                }
            }
            return {
                ...item,
                quantityInCart,
            };
        });
    };

    let pay = () => {
        localStorage.removeItem('CART');
        window.location.reload();
        alert('Cám ơn bạn đã đặt hàng, BOOKSTORE sẽ giao hàng đến bạn từ 2-5 ngày');
    };
    let deleteCart = () => {
        localStorage.removeItem('CART');
        alert('Giỏ hàng của bạn đã xóa, BOOKSTORE mời bạn tiếp tục mua sắm');
        window.location.reload();
    };

    const getTotal = (items) => {
        // Update this function to show total. See comments.

        let total = 0;

        // loop items

        const multiply = (item) => {
            total += item.price;
        };

        items.forEach(multiply);

        return total.toLocaleString();
    };

    return (
        <>
            {/* localStorage.getItem('cart') == null */}
            {cartEmpty ? (
                <div className={cx('wrapper')}>
                    <div className={cx('title')}>Giỏ hàng</div>
                    <div className={cx('empty')}>
                        <img src={images.empty} alt="" />
                        <h4>Không có sản phẩm nào trong giỏ hàng của bạn</h4>
                        <Link to="/">
                            <button className={cx('continue-btn')}>Tiếp tục mua sắm</button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className={cx('wrapper')}>
                    <div className={cx('title')}>Giỏ hàng</div>
                    <div className={cx('product-wrapper')}>
                        {cart.map((product) => (
                            <>
                                <GridLayout
                                    key={product.id}
                                    className={cx('layout')}
                                    cols={12}
                                    rowHeight={30}
                                    width={1200}
                                    style={{
                                        backgroundColor: 'var(--white)',
                                        height: '120px',
                                        marginBottom: '4px',
                                    }}
                                >
                                    <div key="a" data-grid={{ x: 0, y: 0, w: 0.8, h: 2.5, static: true }}>
                                        <div className={cx('image')}>
                                            <Link to={`/product/${product.id}`}>
                                                <img src={product.image} alt="ảnh bìa" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div key="b" data-grid={{ x: 0.8, y: 0, w: 4, h: 2.5, static: true }}>
                                        {/* <div className={cx('info')}> */}
                                        <div className={cx('name')}>{product.title}</div>
                                        <span className={cx('footer')}>
                                            <img src={images.icon7} alt="" /> 7 ngày đổi trả miễn phí
                                        </span>
                                        {/* </div> */}
                                    </div>
                                    <div key="c" data-grid={{ x: 5, y: 1, w: 2, h: 2.5, static: true }}>
                                        <div className={cx('price')}>
                                            {product.price.toLocaleString()} <span>đ</span>
                                        </div>
                                    </div>
                                    <div key="d" data-grid={{ x: 7, y: 0.8, w: 2, h: 2.5, static: true }}>
                                        <div className={cx('amount')}>
                                            <button
                                                className={cx('minus')}
                                                id="decrease"
                                                onClick={changeNumber('minus', product.id)}
                                            >
                                                -
                                            </button>
                                            <input
                                                className={cx('input-qty')}
                                                type="number"
                                                value={product.quantityInCart}
                                                id="amount-item"
                                                readOnly
                                            ></input>
                                            <button
                                                className={cx('plus')}
                                                id="increase"
                                                onClick={changeNumber('plus', product.id)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div key="e" data-grid={{ x: 9, y: 1, w: 2, h: 2.5, static: true }}>
                                        <div className={cx('total')}>
                                            {product.price.toLocaleString()}
                                            {/* {itemsPrice}  */}
                                            <span>đ</span>
                                        </div>
                                    </div>
                                    <div key="f" data-grid={{ x: 11, y: 1, w: 1, h: 2.5, static: true }}>
                                        <div className={cx('trash')}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </div>
                                    </div>
                                </GridLayout>
                            </>
                        ))}
                    </div>
                    <GridLayout
                        className={cx('layout')}
                        cols={12}
                        rowHeight={30}
                        width={1200}
                        style={{
                            backgroundColor: 'var(--white)',
                            height: '120px',
                            marginBottom: '4px',
                        }}
                    >
                        <div key="a" data-grid={{ x: 0, y: 0, w: 0.8, h: 2.5, static: true }}></div>
                        <div key="b" data-grid={{ x: 0.8, y: 0, w: 4, h: 2.5, static: true }}></div>
                        <div key="c" data-grid={{ x: 5, y: 1, w: 2, h: 2.5, static: true }}></div>
                        <div key="d" data-grid={{ x: 7, y: 0.8, w: 2, h: 2.5, static: true }}>
                            Tổng thanh toán:{' '}
                        </div>
                        <div key="e" data-grid={{ x: 9, y: 1, w: 2, h: 2.5, static: true }}>
                            <div className={cx('total')}>
                                {getTotal(cart)}
                                <span>đ</span>
                            </div>
                        </div>
                        <div key="f" data-grid={{ x: 11, y: 1, w: 1, h: 2.5, static: true }}></div>
                    </GridLayout>

                    <div className={cx('btn')}>
                        <Button outline className={cx('delete-btn')} onClick={deleteCart}>
                            Xóa
                        </Button>
                        <Button primary className={cx('pay-btn')} onClick={pay}>
                            Thanh toán
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}

export default CartPage;
