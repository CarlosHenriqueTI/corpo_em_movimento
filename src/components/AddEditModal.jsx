import React from 'react';
import Modal from 'react-modal';
import '../pages/Agendamentos.css';

const AddEditModal = ({ isOpen, closeModal, onSubmit, nome, setNome, selectedDate, setSelectedDate, horario, setHorario, servico, setServico, editMode }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel={editMode ? 'Editar Horário' : 'Adicionar Horário'}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>{editMode ? 'Editar Horário' : 'Adicionar Horário'}</h2>
        <form onSubmit={e => { e.preventDefault(); onSubmit(); }}>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
          <label>Data:</label>
          <input type="date" value={selectedDate ? selectedDate.toISOString().substr(0, 10) : ''} onChange={e => setSelectedDate(new Date(e.target.value))} required />
          <label>Horário:</label>
          <input type="time" value={horario} onChange={e => setHorario(e.target.value)} required />
          <label>Descreva o motivo da consulta:</label>
          <input type="text" value={servico} onChange={e => setServico(e.target.value)} required />
          <button type="submit">{editMode ? 'Salvar Alterações' : 'Adicionar Horário'}</button>
        </form>
      </div>
    </Modal>
  );
};

export default AddEditModal;
