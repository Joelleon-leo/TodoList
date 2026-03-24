import React, { useState } from "react";

const UserTodo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-red-800 flex items-center justify-center font-sans">
      
      {/* Main Card */}
      <div className="bg-white w-full max-w-2xl p-8 rounded-xl shadow-2xl">
        
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          Your Tasks
        </h1>

        {/* Input Section */}
        <div className="flex gap-3 mb-6">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add a new task..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
          />

          <button
            onClick={handleAddTask}
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold rounded-lg hover:shadow-lg transition"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center">No tasks yet...</p>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
              >
                <span
                  onClick={() => toggleComplete(task.id)}
                  className={`cursor-pointer flex-1 ${
                    task.completed
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }`}
                >
                  {task.text}
                </span>

                <button
                  onClick={() => handleDelete(task.id)}
                  className="ml-4 px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default UserTodo;