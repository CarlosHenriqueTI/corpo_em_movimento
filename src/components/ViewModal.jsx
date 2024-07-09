import React from 'react';
import Modal from 'react-modal';
import '../pages/Agendamentos.css';

const ViewModal = ({
  isOpen,
  closeModal,
  horarios = [],
  selectedDate,
  onApprove,
  onEdit,
  onDelete,
}) => {
  const filteredHorarios = horarios
    ? horarios.filter((horario) => {
        if (!selectedDate) return false;
        const horarioDate = new Date(horario.data);
        return (
          horarioDate.getDate() === selectedDate.getDate() &&
          horarioDate.getMonth() === selectedDate.getMonth() &&
          horarioDate.getFullYear() === selectedDate.getFullYear()
        );
      })
    : [];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Horários do Dia"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>
          Horários Aprovados
          {selectedDate && selectedDate.toLocaleDateString()}
        </h2>
        <ul>
          {filteredHorarios.map((horario, index) => (
            <li key={index}>
              <strong>{horario.nome}</strong> - {horario.horario} -{' '}
              {horario.servico}
              {!horario.aprovado ? (
                <button onClick={() => onApprove(index)}>Aprovar</button>
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
