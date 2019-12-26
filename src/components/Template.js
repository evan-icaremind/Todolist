import React, {Component} from 'react';
import styles from './Template.scss';
import classNames from 'classnames/blind'

const cx = classNames.blind(styles);

const Template = ({childern})=> {
    return (
        <div className={cx('page-template')}>
            <h1>To-do List</h1>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    )
};

export default Template;