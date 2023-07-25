import React, { useEffect, useState } from "react";

const Create = () => {
  const [item, setItem] = useState("");
  const [task, setTask] = useState([]);
  const [editTask, setEditTask] = useState("");

  useEffect(() => console.log(task), [task]);

  return (
    <div>
      <form className="flex flex-col gap-3">
        <input
          className="outline placeholder-black bg-red-400 outline-black outline-2 rounded-md w-full font-mono text-lg p-3"
          type="text"
          onChange={(e) => setItem(e.target.value)}
          placeholder="add item..."
          value={item}
        />
        <button
          className="bg-black h-10 font-bold text-red-400 rounded-md w-20 text-lg font-mono"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setTask([
              ...task,
              {
                id: task.length + 1,
                content: item,
                mode: "EDIT",
              },
            ]);
            setItem("");
          }}
        >
          ADD
        </button>
      </form>
      <div>
        <h1 className="h-10 text-black text-center font-bold text-2xl mt-3 font-mono">
          Tasks
        </h1>
        <div>
          {task.map((t) => {
            return (
              <div className="flex gap-3" key={t.id}>
                {t.mode === "EDIT" ? (
                  <div className="outline bg-green-500 text-black outline-black outline-2 rounded-md w-96 font-extrabold text-lg mb-4 p-3">
                    {t.content.toUpperCase()}
                  </div>
                ) : (
                  <input
                    className="outline bg-green-400 text-black outline-black outline-2 rounded-md w-96 font-extrabold text-lg mb-4 p-3"
                    type="text"
                    onChange={(e) => setEditTask(e.target.value)}
                    value={editTask}
                  />
                )}
                <button
                  className="bg-black h-10 font-bold text-red-400 rounded-md w-16 text-md font-mono mt-1"
                  onClick={() =>
                    // IMPORTANT:
                    setTask(
                      task.map((obj) => {
                        if (obj.id === t.id) {
                          if (obj.mode === "EDIT")
                            setEditTask(obj.content.toUpperCase());
                          if (obj.mode === "SAVE") {
                            obj.content = editTask;
                            setEditTask("");
                          }
                          obj.mode = obj.mode === "SAVE" ? "EDIT" : "SAVE";
                        }
                        return obj;
                      })
                    )
                  }
                >
                  {t.mode}
                </button>
                <button
                  className="bg-black h-10 font-bold text-red-400 rounded-md w-20 text-md font-mono mt-1"
                  onClick={() => {
                    let id = t.id;
                    let newTask = task.filter((taskItem) => taskItem.id !== id);
                    setTask(newTask);
                  }}
                >
                  DELETE
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Create;
