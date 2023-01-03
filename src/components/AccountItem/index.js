import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8feaf93fbb5535843b1bdd887c3fe13a~c5_100x100.jpeg?x-expires=1672876800&x-signature=zARFxLI%2BrJPSLqrYIjqTyzh7cxc%3D"
                alt="Davis"
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Davis Miles</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Davismiles</span>
            </div>
        </div>
    );
}

export default AccountItem;
