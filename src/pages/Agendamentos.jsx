import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Agendamentos.css';
import ViewModal from '../components/ViewModal';
import ViewApprovedModal from '../components/ViewApprovedModal';

const Agendamentos = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [horarios, setHorarios] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTipo, setModalTipo] = useState(''); 
  const [horariosDoDia, setHorariosDoDia] = useState([]);
  const [nome, setNome] = useState('');
  const [horario, setHorario] = useState('');
  const [servico, setServico] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [approvedHorarios, setApprovedHorarios] = useState([]);
  const [diasComAgendamento, setDiasComAgendamento] = useState(new Set());

  useEffect(() => {
    const storedHorarios = JSON.parse(localStorage.getItem('horarios')) || [];
    setHorarios(storedHorarios);
  }, []);

  useEffect(() => {
    const approved = horarios.filter(horario => horario.aprovado);
    setApprovedHorarios(approved);
  }, [horarios]);

  useEffect(() => {
    localStorage.setItem('horarios', JSON.stringify(horarios));
  }, [horarios]);

  useEffect(() => {
    const diasComAgendamentoSet = new Set();
    horarios.forEach(horario => {
      const horarioDate = new Date(horario.data);
      const key = `${horarioDate.getDate()}-${horarioDate.getMonth()}-${horarioDate.getFullYear()}`;
      diasComAgendamentoSet.add(key);
    });
    setDiasComAgendamento(diasComAgendamentoSet);
  }, [horarios]);

  useEffect(() => {
    if (selectedDate) {
      const horariosFiltrados = horarios.filter(horario => {
        const horarioDate = new Date(horario.data);
        return (
          horarioDate.getDate() === selectedDate.getDate() &&
          horarioDate.getMonth() === selectedDate.getMonth() &&
          horarioDate.getFullYear() === selectedDate.getFullYear()
        );
      });
      setHorariosDoDia(horariosFiltrados);
    }
  }, [selectedDate, horarios]);

  const handleDateClick = date => {
    setSelectedDate(date);
    setModalTipo('ver');
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedDate(null);
    setHorariosDoDia([]);
    setModalTipo('');
    setNome('');
    setHorario('');
    setServico('');
    setEditMode(false);
    setEditIndex(null);
  };

  const handleMarkHorario = () => {
    setEditMode(false);
    setEditIndex(null);
    setModalTipo('marcar');
    setModalOpen(true);
  };

  const handleSubmit = () => {
    if (!selectedDate) {
      alert('Por favor, selecione uma data.');
      return;
    }

    if (!nome || !horario || !servico) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const newHorario = {
      nome,
      horario,
      servico,
      data: new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + 1), // Adicionando um dia
      aprovado: false
    };

    if (editMode && editIndex !== null) {
      const updatedHorarios = [...horarios];
      updatedHorarios[editIndex] = newHorario;
      setHorarios(updatedHorarios);
    } else {
      setHorarios([...horarios, newHorario]);
    }

    closeModal();
  };

  const handleEdit = index => {
    setEditMode(true);
    setEditIndex(index);
    setSelectedDate(new Date(horarios[index].data)); 
    setNome(horarios[index].nome);
    setHorario(horarios[index].horario);
    setServico(horarios[index].servico);
    setModalTipo('marcar');
    setModalOpen(true);
  };

  const handleDelete = index => {
    if (window.confirm('Tem certeza que deseja excluir este horário?')) {
      const updatedHorarios = [...horarios];
      updatedHorarios.splice(index, 1);
      setHorarios(updatedHorarios);
    }
  };

  const handleApprove = index => {
    const updatedHorarios = [...horarios];
    updatedHorarios[index].aprovado = true;
    setHorarios(updatedHorarios);
  };

  const handleShowApproved = () => {
    setModalTipo('aprovados');
    setModalOpen(true);
  };

  const handleUnapprove = index => {
    const updatedHorarios = [...horarios];
    updatedHorarios[index].aprovado = false;
    setHorarios(updatedHorarios);
  };

  return (
    <div className="app">
      <h1>Sistema de Gerenciamento de Horários</h1>
      <div className="calendar">
        <h2>Calendário</h2>
        <div className="days">
          {[...Array(31).keys()].map(day => {
            const date = new Date(2024, 6, day + 1);
            const key = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
            const hasAgendamento = diasComAgendamento.has(key);
            return (
              <div
                key={day + 1}
                className={`day ${selectedDate && selectedDate.getDate() === day + 1 ? 'selected' : ''} ${hasAgendamento ? 'scheduled' : ''}`}
                onClick={() => handleDateClick(date)}
              >
                {day + 1}
              </div>
            );
          })}
        </div>
        <button className="mark-button" onClick={handleMarkHorario}>Marcar Horário</button>
        <button className="approved-button" onClick={handleShowApproved}>Ver Horários Aprovados</button>
      </div>

      <ViewModal
        isOpen={modalOpen && modalTipo === 'ver'}
        closeModal={closeModal}
        horariosDoDia={horariosDoDia}
        selectedDate={selectedDate}
        onApprove={handleApprove}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <ViewApprovedModal
        isOpen={modalOpen && modalTipo === 'aprovados'}
        closeModal={closeModal}
        approvedHorarios={approvedHorarios}
        onUnapprove={handleUnapprove}
      />

      <Modal
        isOpen={modalOpen && modalTipo === 'marcar'}
        onRequestClose={closeModal}
        contentLabel="Adicionar Horário"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Adicionar Horário</h2>
          <form onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
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
    </div>
  );
};

export default Agendamentos;
