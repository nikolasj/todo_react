import React from 'react';
import ReactDOM from "react-dom";
import cn from "classnames";
import './styles.scss';
import {ReactComponent as CloseIcon} from "../assets/icons/close.svg";

const root = document.getElementById('root');

const Modal = props => {
  const modal = (
    <div className={cn("modal", { 'modal--opened': props.isOpened })}>
      <div className="modal-close" onClick={props.onClose}><CloseIcon className="close-icon" /></div>
      <div className="modal-container">
        <div>
            <h2>{props.title}</h2>
            <div>{props.children}</div>
            <div className="modal-close-container" onClick={props.onClose}>Ok</div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modal,
    root
  )
};

export default Modal;
