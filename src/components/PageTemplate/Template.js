import React from 'react';
import styles from './Template.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Template = ({children}) => {
  return(
    <div className={cx('page-template')}>
      <h1>To-do List</h1>
      <div className={cx('content')}>
        {children}
      </div>
    </div>
  )
};
export default Template;