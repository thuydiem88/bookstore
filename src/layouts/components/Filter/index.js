import classNames from 'classnames/bind';
import styles from './Filter.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import productsData from '~/components/productsData';

const cx = classNames.bind(styles);

function Filter({ setFiltered, activeCategory, setActiveCategory }) {
    const [category, setCategory] = useState([]);
    const ButtonCategories = (productCategories, setCategory) =>
        productCategories.filter((category) => (
            <button
                key={category}
                //   className={`btn-${category}`}
                onClick={() => setCategory(category)}
            >
                {category}
            </button>
        ));

    return (
        <div className={cx('category')}>
            <div className={cx('header')}>
                <h3>
                    <FontAwesomeIcon icon={faListUl} className={cx('header-icon')} />
                    Danh mục
                </h3>
            </div>
            <ul className={cx('list')}>
                <li className={cx('item', 'active')}>
                    <a onClick={() => setActiveCategory()} className={cx('item-link')} href="">
                        Sản phẩm
                    </a>
                </li>
                <li className={cx('item')}>
                    <a onClick={() => setActiveCategory('Sách văn học')} className={cx('item-link')} href="">
                        Sách văn học
                    </a>
                </li>
                <li className={cx('item')}>
                    <a onClick={() => setActiveCategory('Sách kinh tế')} className={cx('item-link')} href="">
                        Sách kinh tế
                    </a>
                </li>
                <li className={cx('item')}>
                    <a onClick={() => setActiveCategory('Sách tâm lý học')} className={cx('item-link')} href="">
                        Sách kỹ năng sống
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Filter;
