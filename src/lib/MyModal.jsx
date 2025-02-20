import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import "./MyModal.css";

const MyModal = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef();

  // Gestion de la fermeture avec la touche "Escape"
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Focus sur la modale lors de son ouverture
  useEffect(() => {
    if (isOpen) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-container"
        onClick={handleContentClick}
        tabIndex={-1}
        ref={modalRef}
      >
        <div className="modal-header">
          <h2 id="modal-title">{title}</h2>
          <button
            className="modal-close"
            aria-label="Close modal"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button className="modal-action" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

MyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};

MyModal.defaultProps = {
  title: "Modal Title",
};

export default MyModal;
