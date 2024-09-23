import PropTypes from 'prop-types';
import { useState } from 'react';

const AddTaskForm = ({ setTasks }) => {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    const newTask = { text: taskText, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={taskText}
        onChange={handleInputChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

AddTaskForm.propTypes = {
  setTasks: PropTypes.func
};

export default AddTaskForm;