import React from 'react';
import { useState } from 'react';
import styles from './home.module.scss';
import { AuthContext } from './utils/contextCadastro';

export default function Home() {
  const { user, setUser } = React.useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  console.log(user);

  function formChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function onSubmit(e) {
    e.preventDefault();
    setUser(user);
  }

  function handleCreateNewTask() {
    if (!newTask) return;
    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
    };
    function handleRemoveTask(id) {
      const deleteTasks = tasks.filter(task => task.id !== id);
      setTasks(deleteTasks);
      // Remova uma task da listagem pelo ID
    }
  }

  return (
    <div className={styles.containerHome}>
      Faça seu cadastro no formulário abaixo:
      <form onSubmit={onSubmit}>
        <label>Seu nome</label>
        <input onChange={formChange} type="text " placeholder="nome" />
        <label>Seu telefone</label>
        <input
          onChange={e => setNewTaskTitle(e.target.value)}
          placeholder="telefone"
          type="text"
        />
        <label>Seu E-mail</label>
        <input onChange={formChange} placeholder="E-mail" type="text" />
        <label>Deseja receber novidades?</label>
        <input type="radio" value="sim" />
        sim
        <input type="radio" value="não" />
        não
      </form>
      <a href="/cadastros">
        <button type="submit">cadastrar</button>
      </a>
    </div>
  );
}
