import React, { useState } from 'react';
import { Axios } from '../../../MainRoute';

function DriverAreaAdd({ id }) {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const postArea = async (data) => {
    try {
      const response = await Axios.put(`/admin/driver/area?id=${id}`, { latexarea: data });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-[#2f67e1e0] rounded shadow-md text-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Add Driver Area</h1>

      <div className="flex flex-col sm:flex-row sm:space-x-2 mb-4">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded outline-none text-black"
          placeholder="Add a new area"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 rounded hover:bg-blue-700 mt-2 sm:mt-0"
        >
          Add
        </button>
      </div>

      <ul className="mb-4">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 border-b border-gray-200"
          >
            <span className="font-medium text-lg">{todo}</span>
            <button
              onClick={() => deleteTodo(index)}
              className="text-red-700 font-semibold hover:text-red-900"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <div
          className="text-lg font-semibold flex justify-center items-center h-full hover:bg-blue-800 rounded-full hover:scale-110 duration-500 mx-20 my-2 p-1 cursor-pointer"
          onClick={() => postArea(todos)}
        >
          POST
        </div>
      )}
    </div>
  );
}

export default DriverAreaAdd;
 