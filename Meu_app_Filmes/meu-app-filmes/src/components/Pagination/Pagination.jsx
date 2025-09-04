// src/components/Pagination/Pagination.jsx

import React from 'react';
import './Pagination.css'; // 

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination-container"> 
      <button onClick={handlePrev} disabled={currentPage === 1}>
        Anterior
      </button>
      <span>Página {currentPage} de {totalPages}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Próxima
      </button>
    </div>
  );
}

export default Pagination;