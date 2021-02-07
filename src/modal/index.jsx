import React from 'react';
import ReactDOM from "react-dom";
import cn from "classnames";
import './styles.css';

const root = document.getElementById('root');

const Modal = props => {
  const modal = (
    <div className={cn("modal", { 'modal--opened': props.isOpened })}>
      <div className="modal-close" onClick={props.onClose}>Close</div>
      <div className="modal-container">
        Modal
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modal,
    root
  )
};

export default Modal;
