import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://scontent-sin6-4.xx.fbcdn.net/v/t31.18172-8/19956152_831665540326130_1356062852395811845_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nILMjeaTUvQAX_pUG1x&_nc_ht=scontent-sin6-4.xx&oh=00_AfDClQDZCppYjVveLCcKpYcCBd92R4BGva3R3hEbe1nEyA&oe=63E85750"
                alt=""
            />
            <div className={cx('item-info')}>
                <h4 className={cx('nickname')}>
                    <strong>quockent</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('name')}>Quoc The Nguyen</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
