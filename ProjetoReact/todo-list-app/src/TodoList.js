import React, { useState } from 'react';
// Importa o React e a função 'useState' do módulo 'react'.
function TodoList() {
// Define uma função de componente chamada 'TodoList'.
const [tasks, setTasks] = useState([]);
const [newTask, setNewTask] = useState('');
// Usa o 'useState' para declarar duas variáveis de estado: 'tasks' e 'newTask'.
const addTask = () => {
if (newTask.trim() !== '') {
// Define uma função 'addTask' para adicionar uma nova tarefa à lista.

// Verifica se 'newTask' não está vazio.
setTasks([...tasks, newTask]);
// Usa 'setTasks' para adicionar a nova tarefa ao array 'tasks'.

setNewTask('');
// Limpa o campo de entrada 'newTask'.
}
};
const deleteTask = (index) => {
const updatedTasks = tasks.filter((_, i) => i !== index);
// Define uma função 'deleteTask' que remove uma tarefa com base em seu índice na lista.
setTasks(updatedTasks);
// Atualiza o array 'tasks' com as tarefas restantes, após a exclusão.
};
return (
<div>
<h1>Lista de Tarefas</h1>

{/* Renderiza um título na página. */}
<input
type="text"
placeholder="Digite uma nova tarefa"
value={newTask}
onChange={(e) => setNewTask(e.target.value)}
/>
{/* Renderiza um campo de entrada de texto onde o usuário

pode digitar uma nova tarefa.
O valor do campo é definido como 'newTask', e o 'onChange'
atualiza o valor de 'newTask'
com o que o usuário digitar. */}

<button onClick={addTask}>Adicionar Tarefa</button>
{/* Renderiza um botão que chama a função 'addTask' quando

clicado. */}
<ul>
{tasks.map((task, index) => (
// Renderiza uma lista não ordenada (ul) para exibir as tarefas.

// Usa 'map' para criar um item de lista (li) para cada tarefa no array 'tasks'.

// 'key={index}' é usado para ajudar o React a acompanhar os elementos da lista.
<li key={index}>
{task}
{/* Exibe o texto da tarefa. */}
<button onClick={() =>
deleteTask(index)}>Excluir</button>
{/* Renderiza um botão "Excluir" que chama a

função
'deleteTask' quando clicado. */}
</li>
))}
</ul>
</div>
);
}
export default TodoList;
// Exporta o componente 'TodoList' para uso em outros lugares do código.