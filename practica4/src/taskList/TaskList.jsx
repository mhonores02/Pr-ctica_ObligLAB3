import PropTypes from 'prop-types'



const TaskList = ({ tasks, setTasks }) => {
    const completeTask = (index) => {
      const newTasks = [...tasks];
      newTasks[index].completed = !newTasks[index].completed;
      setTasks(newTasks);
    };
  
    const deleteTask = (index) => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
    };
  
    return (
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
            <button onClick={() => completeTask(index)}>Completar</button>
            <button onClick={() => deleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    );
  };

  TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        completed: PropTypes.bool
      })
    ),
    setTasks: PropTypes.func
  };
  
  export default TaskList;
  