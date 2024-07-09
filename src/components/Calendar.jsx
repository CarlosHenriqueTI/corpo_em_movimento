import React from 'react';
import '../pages/Agendamentos.css';

const Calendar = ({ selectedDate, horarios, onDateClick, onMarkHorario, onShowApproved }) => {
  const diasComAgendamento = new Set(horarios.map(horario => {
    const horarioDate = new Date(horario.data);
    return `${horarioDate.getDate()}-${horarioDate.getMonth()}-${horarioDate.getFullYear()}`;
  }));

  return (
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
              onClick={() => onDateClick(date)}
            >
              {day + 1}
            </div>
          );
        })}
      </div>
      <button className="mark-button" onClick={onMarkHorario}>Marcar Horário</button>
      <button className="approved-button" onClick={onShowApproved}>Ver Horários Aprovados</button>
    </div>
  );
};

export default Calendar;
