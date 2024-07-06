import { useState } from 'react';
import Calendar from './components/Calendar';
import ScheduleForm from './components/ScheduleForm';
import ScheduleList from './components/ScheduleList';
import './Agendamentos.css';

function App() {
  const [schedules, setSchedules] = useState([]);

  const addSchedule = (schedule) => {
    setSchedules([...schedules, schedule]);
  };

  const removeSchedule = (id) => {
    setSchedules(schedules.filter(schedule => schedule.id !== id));
  };

  return (
    <div className="Agendamentos">
      <h1>Agenda de Agendamentos</h1>
      <ScheduleForm addSchedule={addSchedule} />
      <Calendar schedules={schedules} />
      <ScheduleList schedules={schedules} removeSchedule={removeSchedule} />
    </div>
  );
}

export default App;
