import React from 'react';
import Modal from 'react-modal';
import '../pages/Agendamentos.css';

const ViewModal = ({
  isOpen,
  closeModal,
  horariosDoDia = [],
  selectedDate,
  onApprove,
  onEdit,
  onDelete,
}) => {

  const handleApproveClick = (index) => {
    onApprove(index); // Chama a função para aprovar o horário
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Horários do Dia"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Horários Agendados - {selectedDate && selectedDate.toLocaleDateString()}</h2>
        <ul>
          {horariosDoDia.map((horario, index) => (
            <li key={index}>
              <strong>{horario.nome}</strong> - {horario.horario} - {horario.servico}
              {!horario.aprovado ? (
                <button onClick={() => handleApproveClick(index)}>Aprovar</button>
              ) : (
                <span className="approved">Aprovado</span>
              )}
              <button onClick={() => onEdit(index)}>Editar</button>
              <button onClick={() => onDelete(index)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default ViewModal;
