// import React from 'react';
import PropTypes from 'prop-types';
import './ScheduleList.css';

const ScheduleList = ({ schedules, removeSchedule }) => {
  // Verifica se a lista de agendamentos está vazia e exibe uma mensagem apropriada
  if (schedules.length === 0) {
    return (
      <div className="schedule-list">
        <h2>Lista de Agendamentos</h2>
        <p>Nenhum agendamento encontrado.</p>
      </div>
    );
  }

  return (
    <div className="schedule-list">
      <h2>Lista de Agendamentos</h2>
      <ul>
        {schedules.map(schedule => (
          <li key={schedule.id}>
            <span>{schedule.date} {schedule.time} - {schedule.description}</span>
            <button onClick={() => removeSchedule(schedule.id)} aria-label={`Remover agendamento de ${schedule.description}`}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ScheduleList.propTypes = {
  schedules: PropTypes.array.isRequired,
  removeSchedule: PropTypes.func.isRequired
};

export default ScheduleList;