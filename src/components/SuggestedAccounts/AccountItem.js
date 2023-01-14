import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Image from '~/components/Image/Image';
import { Wrapper as ProperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <ProperWrapper>
                    <AccountPreview />
                </ProperWrapper>
            </div>
        );
    };

    return (
        // wrap for tippy
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <Image
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
            </Tippy>
        </div>
    );
}

export default AccountItem;
