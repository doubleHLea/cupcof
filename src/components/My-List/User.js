import React from 'react';
import Modal from './Modal/Modal';
import { Button } from 'antd';


function User(props) {

  const [modalOpen, setModalOpen] = React.useState(false);
  const dimmerRef = React.useRef(null);

  const showModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className="item">
      <h3 className="user faq-title">{props.children} 님</h3>
      <ul>
        <li>회원 정보 수정</li>
        <li>
          <Button type="text" onClick={showModal}>FAQ</Button>
          {modalOpen && <Modal setModalOpen={setModalOpen} />}
          {modalOpen && <div className='overlay' ref={dimmerRef} />}
        </li>
      </ul>
    </div>
  );
}

export default User;