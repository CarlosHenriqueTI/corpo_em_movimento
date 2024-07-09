import React, { useState, useEffect } from 'react';
import Calendar from '../components/Calendar';
import AddEditModal from '../components/AddEditModal';
import ViewModal from '../components/ViewModal';
import './Agendamentos.css';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [horarios, setHorarios] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [nome, setNome] = useState('');
  const [horario, setHorario] = useState('');
  const [servico, setServico] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedHorarios = JSON.parse(localStorage.getItem('horarios')) || [];
    setHorarios(storedHorarios);
  }, []);

  useEffect(() => {
    localStorage.setItem('horarios', JSON.stringify(horarios));
  }, [horarios]);

  const handleDateClick = date => {
    setSelectedDate(date);
    setModalType('view');
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedDate(null);
    setNome('');
    setHorario('');
    setServico('');
    setEditMode(false);
    setEditIndex(null);
  };

  const handleMarkHorario = () => {
    setEditMode(false);
    setEditIndex(null);
    setModalType('add');
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

    // Adicionando um dia à data selecionada
    const nextDay = new Date(selectedDate);
    nextDay.setDate(nextDay.getDate() + 1);

    const newHorario = {
      nome,
      horario,
      servico,
      data: nextDay.toISOString(), // Armazena o próximo dia no formato ISO
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
    setModalType('add');
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
    setModalType('approved');
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
      <Calendar
        selectedDate={selectedDate}
        horarios={horarios}
        onDateClick={handleDateClick}
        onMarkHorario={handleMarkHorario}
        onShowApproved={handleShowApproved}
      />

      <AddEditModal
        isOpen={modalOpen && modalType === 'add'}
        closeModal={closeModal}
        onSubmit={handleSubmit}
        nome={nome}
        setNome={setNome}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        horario={horario}
        setHorario={setHorario}
        servico={servico}
        setServico={setServico}
        editMode={editMode}
      />

      <ViewModal
        isOpen={modalOpen && modalType === 'view'}
        closeModal={closeModal}
        horarios={horarios}
        selectedDate={selectedDate}
        onApprove={handleApprove}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <ViewModal
        isOpen={modalOpen && modalType === 'approved'}
        closeModal={closeModal}
        approvedHorarios={horarios.filter(horario => horario.aprovado)}
        onUnapprove={handleUnapprove}
      />
    </div>
  );
};

export default App;
