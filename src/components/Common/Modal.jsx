// Modal.js
import React from 'react';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button className="close-button" onClick={handleClose}>
          Close
        </button>
        {children}
      </section>
    </div>
  );
};

export default Modal;
