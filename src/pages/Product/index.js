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
                        <h3 className={cx('review')}>(Xem 88 ????nh gi??)</h3>
                        <h3 className={cx('sold')}>???? b??n 100+</h3>
                    </div>
                    <div className={cx('price')}>
                        <h3>{thisProduct.price.toLocaleString()} </h3>
                        <div className={cx('discount')}>
                            <h4>M?? gi???m gi??</h4>
                            <div className={cx('coupon__tags')}>
                                <div className={cx('coupon__tag')}>Ho??n 50k xu</div>
                                <div className={cx('coupon__tag')}>Ho??n 25k xu</div>
                                <div className={cx('coupon__tag')}>Gi???m 10k</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('deal')}>
                        <h3>Deal s???c</h3>
                        <div>Mua k??m deal s???c</div>
                    </div>
                    <div className={cx('transport')}>
                        <span>
                            B???n h??y <a>nh???p ?????a ch???</a> nh???n h??ng ????? ???????c d??? b??o th???i gian & chi ph?? giao h??ng ch??nh x??c
                            nh???t
                        </span>
                    </div>
                    <div className={cx('amount')}>
                        <h3>S??? l?????ng</h3>
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
                        <h3 className={cx('available')}>88 s???n ph???m c?? s???n</h3>
                    </div>
                    <Button
                        primary
                        leftIcon={<FontAwesomeIcon icon={faCartShopping} />}
                        style={{ padding: '12px 50px' }}
                        onClick={() => addToCart(thisProduct)}
                    >
                        Th??m v??o gi??? h??ng
                    </Button>
                    <div className={cx('share')}>
                        <h3>Chia s???:</h3>
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
                <div className={cx('title')}>Th??ng tin chi ti???t</div>
                <div className={cx('content')}>
                    <table>
                        <tbody>
                            <tr>
                                <td>C??ng ty ph??t h??nh</td>
                                <td>{thisProduct.company}</td>
                            </tr>
                            <tr>
                                <td>K??ch th?????c</td>
                                <td>13 x 20.5 cm</td>
                            </tr>
                            <tr>
                                <td>T??c gi???</td>
                                <td>{thisProduct.author}</td>
                            </tr>
                            <tr>
                                <td>Lo???i b??a</td>
                                <td>B??a m???m</td>
                            </tr>
                            <tr>
                                <td>Nh?? xu???t b???n</td>
                                <td>{thisProduct.publishingCompany}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={cx('description')}>
                <div className={cx('title')}>M?? t??? s???n ph???m</div>
                <div className={cx('content')}>{thisProduct.description}</div>
            </div>
        </div>
    );
}

export default Product;
