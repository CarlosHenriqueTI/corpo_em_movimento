import { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import './ScheduleForm.css';

const ScheduleForm = ({ addSchedule }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSchedule = {
      ...formData,
      id: Date.now(),
    };
    addSchedule(newSchedule);
    // Limpa o formulário após o envio
    setFormData({
      date: '',
      time: '',
      description: '',
    });
  };
  ScheduleForm.propTypes = {
    addSchedule: PropTypes.func.isRequired,
  };

  return (
    <form onSubmit={handleSubmit} className="schedule-form">
      <input 
        type="date" 
        name="date"
        value={formData.date} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="time" 
        name="time"
        value={formData.time} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="text" 
        name="description"
        placeholder="Descrição" 
        value={formData.description} 
        onChange={handleChange} 
        required 
      />
      <button type="submit">Adicionar Agendamento</button>
    </form>
  );
};

export default ScheduleForm;