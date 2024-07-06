import { useState, useMemo } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

const MyCalendar = ({ schedules }) => {
  const [date, setDate] = useState(new Date());

  // Passo 2: Uso de useMemo para pré-processar os schedules
  const schedulesByDate = useMemo(() => {
    const map = {};
    schedules.forEach(schedule => {
      const dateStr = new Date(schedule.date).toISOString().split('T')[0]; // Passo 3: Formato 'YYYY-MM-DD'
      if (!map[dateStr]) {
        map[dateStr] = [];
      }
      map[dateStr].push(schedule);
    });
    return map;
  }, [schedules]); // Dependência: schedules

  return (
    <div className="calendar">
      <h2>Calendário</h2>
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={({ date }) => {
          const daySchedules = schedulesByDate[date.toISOString().split('T')[0]]; // Acesso direto pelo mapa
          return daySchedules ? (
            <ul>
              {daySchedules.map(schedule => (
                <li key={schedule.id}>
                  {schedule.time} - {schedule.description}
                </li>
              ))}
            </ul>
          ) : null;
        }}
      />
    </div>
  );
};
MyCalendar.propTypes = {
  schedules: PropTypes.array.isRequired, // Add prop validation for 'schedules'
};

export default MyCalendar;