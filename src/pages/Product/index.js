import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import React, { useState, useEffect } from 'react';

import Carousel from 'react-material-ui-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { faFacebook, faFacebookMessenger, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useParams } from 'react-router-dom';
import productsData from '~/components/productsData';

function Item({ item }) {
    return (
        <div className={cx('large')}>
            <img
                src={item.picture}
                alt=""
                style={{ width: '450px', height: '540px', transform: 'translateX(10%)' }}
            ></img>
        </div>
    );
}

const cx = classNames.bind(styles);
function Product() {
    const { productId } = useParams();
    const thisProduct = productsData.find((prod) => prod.id == productId);

    var cart = JSON.parse(localStorage.getItem('CART')) || [];

    // console.log(cart);
    const addToCart = (id) => {
        //check if product already exist in cart
        if (cart.some((item) => item.id === thisProduct.id)) {
            // alert('Product in cart');
        } else {
            const item = productsData.find((product) => product.id === thisProduct.id);
            cart.push({
                ...item,
                quantityInCart: 1,
            });
            console.log(cart);
        }
        // updateCart();
        localStorage.setItem('CART', JSON.stringify(cart));
        window.location.reload();
    };

    let [num, setNum] = useState(1);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 1) {
            setNum(num - 1);
        }
    };
    let handleNum = (e) => {
        setNum(e.target.value);
    };

    var items = [
        {
            name: 'Random Name #1',
            picture: thisProduct.images[0],
        },
        {
            name: 'Random Name #2',
            picture: thisProduct.images[1],
        },
        {
            name: 'Random Name #3',
            picture: thisProduct.images[2],
        },
        {
            name: 'Random Name #4',
            picture: thisProduct.images[3],
        },
    ];

    const [index, setIndex] = React.useState(0);

    const handleChange = (cur = 0, prev = 0) => {
        setIndex(cur);
        // console.log(cur, prev);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('image')}>
                    <Carousel
                        index={index}
                        onChange={handleChange}
                        interval={9000}
                        animation="slide"
                        indicators={false}
                        stopAutoPlayOnHover
                        swipe
                        className="my-carousel"
                    >
                        {items.map((item, i) => (
                            <Item key={i} item={item} />
                        ))}
                    </Carousel>
                    <div className={cx('image-item')}>
                        {items.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                style={{ border: i === index ? '3px solid var(--primary)' : '3px solid #fff' }}
                            >
                                <img src={item.picture} alt="" style={{ width: '80px', height: '100px' }}></img>
                            </button>
                        ))}
                    </div>
                </div>
                <div className={cx('info')}>
                    <h2 className={cx('title')}>{thisProduct.title}</h2>
                    <div className={cx('action')}>
                        <div className={cx('rate')}>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <h3 className={cx('review')}>(Xem 88 đánh giá)</h3>
                        <h3 className={cx('sold')}>Đã bán 100+</h3>
                    </div>
                    <div className={cx('price')}>
                        <h3>{thisProduct.price.toLocaleString()} </h3>
                        <div className={cx('discount')}>
                            <h4>Mã giảm giá</h4>
                            <div className={cx('coupon__tags')}>
                                <div className={cx('coupon__tag')}>Hoàn 50k xu</div>
                                <div className={cx('coupon__tag')}>Hoàn 25k xu</div>
                                <div className={cx('coupon__tag')}>Giảm 10k</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('deal')}>
                        <h3>Deal sốc</h3>
                        <div>Mua kèm deal sốc</div>
                    </div>
                    <div className={cx('transport')}>
                        <span>
                            Bạn hãy <a>nhập địa chỉ</a> nhận hàng để được dự báo thời gian & chi phí giao hàng chính xác
                            nhất
                        </span>
                    </div>
                    <div className={cx('amount')}>
                        <h3>Số lượng</h3>
                        <button className={cx('minus')} id="decrease" onClick={decNum}>
                            -
                        </button>
                        <input
                            className={cx('input-qty')}
                            type="number"
                            value={num}
                            onChange={handleChange}
                            id="amount-item"
                            readOnly
                        ></input>
                        <button className={cx('plus')} id="increase" onClick={incNum}>
                            +
                        </button>
                        <h3 className={cx('available')}>88 sản phẩm có sẵn</h3>
                    </div>
                    <Button
                        primary
                        leftIcon={<FontAwesomeIcon icon={faCartShopping} />}
                        style={{ padding: '12px 50px' }}
                        onClick={() => addToCart(thisProduct)}
                    >
                        Thêm vào giỏ hàng
                    </Button>
                    <div className={cx('share')}>
                        <h3>Chia sẻ:</h3>
                        <div className={cx('social')}>
                            <a className={cx('social-link', 'facebook')} href="#">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a className={cx('social-link', 'messenger')} href="#">
                                <FontAwesomeIcon icon={faFacebookMessenger} />
                            </a>
                            <a className={cx('social-link', 'pinterest')} href="#">
                                <FontAwesomeIcon icon={faPinterest} />
                            </a>
                            <a className={cx('social-link', 'twitter')} href="#">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('details')}>
                <div className={cx('title')}>Thông tin chi tiết</div>
                <div className={cx('content')}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Công ty phát hành</td>
                                <td>{thisProduct.company}</td>
                            </tr>
                            <tr>
                                <td>Kích thước</td>
                                <td>13 x 20.5 cm</td>
                            </tr>
                            <tr>
                                <td>Tác giả</td>
                                <td>{thisProduct.author}</td>
                            </tr>
                            <tr>
                                <td>Loại bìa</td>
                                <td>Bìa mềm</td>
                            </tr>
                            <tr>
                                <td>Nhà xuất bản</td>
                                <td>{thisProduct.publishingCompany}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={cx('description')}>
                <div className={cx('title')}>Mô tả sản phẩm</div>
                <div className={cx('content')}>{thisProduct.description}</div>
            </div>
        </div>
    );
}

export default Product;
