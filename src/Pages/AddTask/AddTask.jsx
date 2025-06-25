// src/pages/AddTask.jsx
import { use } from "react";

import { toast } from "react-toastify";
import { AuthContext } from "../../AuthContext/AuthContext";

const AddTask = () => {
  const { user } = use(AuthContext);

  const handleAddTask = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const description = form.description.value;
    const deadline = form.deadline.value;
    const budget = parseFloat(form.budget.value);
    const userName = user?.displayName;
    const userEmail = user?.email;

    const taskData = {
      title,
      category,
      description,
      deadline,
      budget,
      userName,
      userEmail,
    };
    // console.log(taskData);
    fetch(
      "https://freelance-task-marketplace-server-gilt.vercel.app/add-task",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success(" Task added successfully!");
          form.reset();
        } else {
          toast.error("❌ Something went wrong");
        }
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-2xl font-semibold mb-6 dark:text-white">
        {" "}
        Add New Task
      </h2>
      <form onSubmit={handleAddTask} className="space-y-4 dark:text-black ">
        <input
          name="title"
          type="text"
          placeholder="Task Title"
          required
          className="input w-full "
        />

        <select name="category" required className="input w-full">
          <option value="">-- Select Category --</option>
          <option value="Web Development">Web Development</option>
          <option value="Design">Design</option>
          <option value="Writing">Writing</option>
          <option value="Marketing">Marketing</option>
        </select>

        <textarea
          name="description"
          placeholder="Task Description"
          required
          className="input w-full"
        />

        <input name="deadline" type="date" required className="input w-full" />

        <input
          name="budget"
          type="number"
          placeholder="Budget (৳)"
          required
          className="input w-full"
        />

        <input
          name="userEmail"
          type="email"
          value={user?.email}
          readOnly
          className="input w-full bg-gray-100"
        />
        <input
          name="userName"
          type="text"
          value={user?.displayName}
          readOnly
          className="input w-full bg-gray-100"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
