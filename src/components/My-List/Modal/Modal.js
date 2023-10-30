import React from 'react';
import Accordion from './Accordion';

function Modal({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
  }

  const modalRef = React.useRef(null);

  React.useEffect(() => {
    const handler = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });


  return (
    <div>
      <div id="modal" className="modal" ref={modalRef}>
        <div className="modal-wrap">
          <div className="modal-header">
            <h2 className='modal-title'>a Cup of Coffee FAQ </h2>
          </div>
          <div className="modal-content">
            <div className="photo"></div>
            <div className="modal-faq">
              <div className="btn-close">
                <button className="btn-close" onClick={closeModal}>&times;</button>
              </div>
              <hr />
              <div className="faq-content">
                <div>
                  <div>
                    <h3>&#9749; CupCof 지도 이용 방법</h3>
                  </div>
                  <Accordion />
                </div>
                <ul>
                  <div>
                    <h3>&#128205; 북마크/리뷰 이용 방법</h3>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Modal;