import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
// import { SearchIcon } from '~/components/Icons';
// import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import Search from '../Search';
import Cart from '../Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faGooglePlusG,
    faInstagram,
    faLinkedinIn,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import Button from '~/components/Button';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { Link } from 'react-router-dom';
import productsData from '~/components/productsData';

const cx = classNames.bind(styles);
function Header() {
    const currentUser = true;
    // const {  size } = props;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Header-nav */}
                <div className={cx('nav')}>
                    <div className={cx('nav-left')}>
                        <ul className={cx('social')}>
                            <li className={cx('social-item')}>
                                <a className={cx('social-link')} href="#">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li className={cx('social-item')}>
                                <a className={cx('social-link')} href="#">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li className={cx('social-item')}>
                                <a className={cx('social-link')} href="#">
                                    <FontAwesomeIcon icon={faGooglePlusG} />
                                </a>
                            </li>
                            <li className={cx('social-item')}>
                                <a className={cx('social-link')} href="#">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </li>
                            <li className={cx('social-item')}>
                                <a className={cx('social-link')} href="#">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </li>
                            <li className={cx('social-item')}>
                                <a className={cx('social-link')} href="#">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('nav-right')}>
                        <Button text leftIcon={<FontAwesomeIcon icon={faBell} />}>
                            Thông báo
                        </Button>
                        <Button text leftIcon={<FontAwesomeIcon icon={faQuestionCircle} />}>
                            Hỗ trợ
                        </Button>
                        {currentUser ? (
                            <HeadlessTippy
                                placement="bottom-end"
                                interactive //cho phép select
                                offset={[0, 0]}
                                // visible={cartResult.length > 0}
                                render={(attrs) => (
                                    <div tabIndex="-1" {...attrs}>
                                        <PopperWrapper>
                                            <div className={cx('account')}>
                                                <span className={cx('item')}>Tài khoản của tôi</span>
                                                <span className={cx('item')}>Đăng xuất</span>
                                            </div>
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <div className={cx('current-user')}>
                                    <img className={cx('avatar')} src={images.avatarUser} alt="avatar" />
                                    <span className={cx('name')}>thuydiem</span>
                                </div>
                            </HeadlessTippy>
                        ) : (
                            <>
                                <Button text>Đăng ký</Button>
                                <Button text>Đăng nhập</Button>
                            </>
                        )}
                    </div>
                </div>
                {/* Header-content */}
                <div className={cx('content')}>
                    <Link to="/">
                        <div className={cx('logo')}>
                            <img className={cx('logo-img')} src={images.logo} alt="bookstore" />
                        </div>
                    </Link>

                    {/* Search */}
                    <Search />

                    {/* Cart */}
                    <Cart />
                </div>
            </div>
        </header>
    );
}

export default Header;
