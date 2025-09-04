import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa'; // Ícone para dar ênfase visual
import './ErrorMessage.css';

function ErrorMessage({ message }) {
  // Se nenhuma mensagem for passada, o componente não renderiza nada.
  if (!message) {
    return null;
  }

  return (
    <div className="error-container" role="alert">
      <FaExclamationTriangle size={20} className="error-icon" />
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;