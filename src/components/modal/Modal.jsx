import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ onClose, isOpen, title, children }) => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById("modal");
    setMounted(true);
  }, []);

  if (!ref.current || !mounted) return null;

  return isOpen
    ? createPortal(
        <div className="modal-wrapper">
          <button className="modal-bg" onClick={onClose} />
          <div className="modal-box">
            <h2>{title}</h2>
            <section className="modal-content">{children}</section>
          </div>
        </div>,
        ref.current
      )
    : null;
};

export default Modal;
