import React from 'react'
import Review from './Review';
import Title from './Title';
import User from './User';
import Bookmark from './Bookmark';
import BottomMenu from './Bottom';
import '../../index.css';

const UserContainer = () => {
  return (
    <div style={{
      padding: '30px',
      width: '1100px',
      margin: '0 auto'
    }}>
      <Title />
      <main id="container">
        <User>User</User>
        <Bookmark />
        <Review />
        <BottomMenu />
      </main>
    </div>
  );
}

export default UserContainer
