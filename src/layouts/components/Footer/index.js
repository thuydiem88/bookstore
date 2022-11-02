import classNames from 'classnames/bind';
import GridLayout from 'react-grid-layout';
import React from 'react';
import styles from './Footer.module.scss';
import Button from '~/components/Button';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

class GridList extends React.Component {
    render() {
        return (
            <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
                <div key="a" data-grid={{ x: 0, y: 0, w: 2.4, h: 2, static: true }}>
                    <h3 className={cx('heading')}>Chăm sóc khách hàng</h3>
                    <ul className={cx('list')}>
                        <li className={cx('item')}>
                            <a href="" className={cx('item-link')}>
                                Trung tâm hỗ trợ
                            </a>
                            <a href="" className={cx('item-link')}>
                                TD_Shop Mall
                            </a>
                            <a href="" className={cx('item-link')}>
                                Hướng dẫn mua hàng
                            </a>
                        </li>
                    </ul>
                </div>
                <div key="b" data-grid={{ x: 2.4, y: 0, w: 2.4, h: 2, static: true }}>
                    <h3 className={cx('heading')}>Giới thiệu</h3>
                    <ul className={cx('list')}>
                        <li className={cx('item')}>
                            <a href="" className={cx('item-link')}>
                                Sách văn học
                            </a>
                            <a href="" className={cx('item-link')}>
                                Sách Kỹ năng sống
                            </a>
                            <a href="" className={cx('item-link')}>
                                Sách tâm lý học
                            </a>
                        </li>
                    </ul>
                </div>
                <div key="c" data-grid={{ x: 4.8, y: 0, w: 2.4, h: 2, static: true }}>
                    <h3 className={cx('heading')}>Danh mục</h3>
                    <ul className={cx('list')}>
                        <li className={cx('item')}>
                            <a href="" className={cx('item-link')}>
                                Giới thiệu
                            </a>
                            <a href="" className={cx('item-link')}>
                                Tuyển dụng
                            </a>
                            <a href="" className={cx('item-link')}>
                                Điều khoản
                            </a>
                        </li>
                    </ul>
                </div>
                <div key="d" data-grid={{ x: 7.2, y: 0, w: 2.4, h: 2, static: true }}>
                    <h3 className={cx('heading')}>Theo dõi</h3>
                    <ul className={cx('list')}>
                        <li className={cx('item')}>
                            <a href="" className={cx('item-link')}>
                                <FontAwesomeIcon icon={faFacebook} />
                                <span>Facebook</span>
                            </a>
                            <a href="" className={cx('item-link')}>
                                <FontAwesomeIcon icon={faInstagram} />
                                <span>Instagram</span>
                            </a>
                            <a href="" className={cx('item-link')}>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                                <span>Linkedin</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div key="e" data-grid={{ x: 9.6, y: 0, w: 2.4, h: 2, static: true }}>
                    <h3 className={cx('heading')}>Vào cửa hàng trên ứng dụng</h3>
                    <div className={cx('list-apps')}>
                        <img src={images.qr} alt="QR code" className={cx('item-qr-img')} />
                        <div className={cx('item-qr-apps')}>
                            <img src={images.ggplay} alt="" className={cx('item-qr-down')} />
                            <img src={images.appstore} alt="" className={cx('item-qr-down')} />
                        </div>
                    </div>
                </div>
            </GridLayout>
        );
    }
}
function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <hr className={cx('line')} />
            <div className={cx('inner')}>
                <GridList />
            </div>
            <div className={cx('copy-right')}>
                <span>© 2022 - Bản quyền thuộc về Công ty TNHH Thúy Diễm</span>
            </div>
        </footer>
    );
}

export default Footer;
