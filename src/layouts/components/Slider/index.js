import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import images from '~/assets/images';

import CountUp from 'react-countup';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Slider() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('layout-1', 'layout')}></div>
            <div className={cx('layout-2', 'layout')}></div>
            <div className={cx('layout-3', 'layout')}></div>
            <div className={cx('layout-4', 'layout')}></div>
            <div className={cx('layout-5', 'layout')}></div>
            <div className={cx('layout-6', 'layout')}></div>
            <div className={cx('layout-7', 'layout')}>
                <div className={cx('inside')}></div>
            </div>
            <div className={cx('layout-8', 'layout')}>
                <div className={cx('inside')}></div>
            </div>
            <div className={cx('column')}>
                <img className={cx('book-image')} src={images.sliderCover} alt="" />
                <div className={cx('member')}>
                    <div className={cx('counter')}>
                        <span className={cx('counter-up')}>
                            <CountUp start={0} end={27} suffix="K" />
                        </span>
                        <h3 className={cx('counter-title')}>Facebook Members</h3>
                    </div>
                    <div className={cx('counter')}>
                        <span className={cx('counter-up')}>
                            <CountUp start={0} end={16} suffix="K" />
                        </span>
                        <h3 className={cx('counter-title')}>Twitter Members</h3>
                    </div>
                </div>
            </div>
            <div className={cx('column')}>
                <h1 className={cx('title')}>read, share, earn</h1>
                <Button className={cx('button')}>start earning now</Button>
            </div>
        </div>
    );
}

export default Slider;
