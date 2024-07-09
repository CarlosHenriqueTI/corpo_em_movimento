import React from 'react';
import Modal from 'react-modal';
import '../pages/Agendamentos.css';

const ViewApprovedModal = ({
  isOpen,
  closeModal,
  approvedHorarios = [],
  onUnapprove,
}) => {

  const handleUnapproveClick = (index) => {
    onUnapprove(index); // Chama a função para desaprovar o horário
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Horários Aprovados"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Horários Aprovados</h2>
        <ul>
          {approvedHorarios.map((horario, index) => (
            <li key={index}>
              <strong>{horario.nome}</strong> - {horario.horario} - {horario.servico}
              <button onClick={() => handleUnapproveClick(index)}>Cancelar</button>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default ViewApprovedModal;
