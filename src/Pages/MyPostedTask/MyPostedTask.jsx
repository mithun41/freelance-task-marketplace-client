// src/pages/MyTasks.jsx
import { use, useEffect, useState } from "react";

import { toast } from "react-toastify";
import { AuthContext } from "../../AuthContext/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const MyPostedTask = () => {
  const { user } = use(AuthContext);
  const [selectedTask, setSelectedTask] = useState(null);
  const [myTasks, setMyTasks] = useState([]);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log("Updated");
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
    fetch(
      `https://freelance-task-marketplace-server-gilt.vercel.app/update-task/${selectedTask._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Task updated successfully!");

          fetch(
            `https://freelance-task-marketplace-server-gilt.vercel.app/my-tasks?email=${user?.email}`
          )
            .then((res) => res.json())
            .then((data) => setMyTasks(data));
          // console.log(data);
          document.getElementById("my_modal_5").close();
        }
      });
    // console.log(taskData);
  };

  useEffect(() => {
    fetch(
      `https://freelance-task-marketplace-server-gilt.vercel.app/my-tasks?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyTasks(data);
        // console.log(data);
      });
  }, [user]);

  // Delete Handler
  const handleDelete = (id) => {
    // console.log("deleted", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://freelance-task-marketplace-server-gilt.vercel.app/my-tasks/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.success("Task deleted!");
              setMyTasks(myTasks.filter((task) => task._id !== id));
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 min-h-[calc(100vh-300px)] dark:bg-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">My Posted Tasks</h2>

      {myTasks.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven't posted any tasks yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100 dark:bg-gray-700 text-left">
              <tr>
                <th className="p-3">Title</th>
                <th className="p-3">Category</th>
                <th className="p-3">Budget</th>
                <th className="p-3">Deadline</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myTasks.map((task) => (
                <tr key={task._id} className="border-t">
                  <td className="p-3">{task.title}</td>
                  <td className="p-3">{task.category}</td>
                  <td className="p-3">{task.budget} ৳</td>
                  <td className="p-3">
                    {new Date(task.deadline).toLocaleDateString()}
                  </td>
                  <td className="p-3 text-center space-x-2 space-y-1">
                    <button
                      onClick={() => {
                        setSelectedTask(task);
                        document.getElementById("my_modal_5").showModal();
                      }}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => navigate(`/browse-tasks/${task._id}`)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded"
                    >
                      Bids
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box ">
          <div className="max-w-2xl mx-auto p-6 mt-10 bg-white dark:bg-gray-800 rounded shadow">
            <h2 className="text-2xl font-semibold mb-6"> Add New Task</h2>
            <form
              onSubmit={handleUpdate}
              className="space-y-4 dark:text-black "
            >
              <input
                name="title"
                type="text"
                defaultValue={selectedTask?.title}
                placeholder="Task Title"
                required
                className="input w-full  "
              />

              <select
                name="category"
                defaultValue={selectedTask?.category}
                required
                className="input w-full"
              >
                <option value="">-- Select Category --</option>
                <option value="Web Development">Web Development</option>
                <option value="Design">Design</option>
                <option value="Writing">Writing</option>
                <option value="Marketing">Marketing</option>
              </select>

              <textarea
                name="description"
                placeholder="Task Description"
                defaultValue={selectedTask?.description}
                required
                className="input w-full"
              />

              <input
                name="deadline"
                type="date"
                defaultValue={selectedTask?.deadline}
                required
                className="input w-full"
              />

              <input
                name="budget"
                type="number"
                defaultValue={selectedTask?.budget}
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
                Update Task
              </button>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyPostedTask;
