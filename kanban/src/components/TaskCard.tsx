import type { Id, Task } from "../types";
import TrashIcon from "../icons/TrashIcon";
import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
    task: Task;
    deleteTask: (id: Id) => void;
    updateTask: (id: Id, content: string) => void;
}
function TaskCard({ task, deleteTask, updateTask }: Props) {

    const [mouseOver, setMouseOver] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const toggleEditMode = () => {
        setEditMode((prev) => !prev);
        setMouseOver(false);
    }

    const { attributes, listeners, setNodeRef, transform, transition, isDragging }
        =
        useSortable({
            id: task.id,
            data: {
                type: "Task",
                task,
            },
            disabled: editMode,
        })

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    }

    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                style={style}
                className="bg-gradient-to-r from-slate-800 to-slate-900 p-3 h-18 rounded-xl opacity-80 border-2 border-indigo-400 shadow-lg"
            />
        );
    }

    if (editMode) {
        return (
            <div
                ref={setNodeRef}
                style={style}
                {...attributes}
                {...listeners}
                className="bg-gradient-to-r from-slate-800 to-slate-900 p-3 rounded-xl items-center
                         flex text-left w-full"
                role="button"
                tabIndex={0}
                aria-label="Edit task">
                <textarea
                    className="w-full h-full bg-gray-950 text-white resize-none focus:outline-none bg-transparent"
                    value={task.content}
                    autoFocus
                    placeholder="tast content"
                    onBlur={toggleEditMode}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && e.shiftKey) {
                            toggleEditMode();
                        }
                    }}
                    onChange={(e) => updateTask(task.id, e.target.value)}
                ></textarea>

            </div>
        )

    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            onClick={toggleEditMode}
            className="bg-gradient-to-r from-slate-800 to-slate-900 p-3 rounded-xl items-center
                   flex text-left w-full gap-3 transition-transform transform hover:scale-[1.02] hover:shadow-lg border border-transparent hover:border-indigo-500 cursor-pointer"
            onMouseEnter={() => {
                setMouseOver(true);
            }}
            onMouseLeave={() => {
                setMouseOver(false);
            }}

        >
            <p className="my-auto h-[90%] w-full overflow-hidden text-sm text-gray-100">
                {task.content}</p>
            {mouseOver && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        deleteTask(task.id)
                    }}
                    className="ml-auto bg-rose-600 hover:bg-rose-500 p-2 rounded-full text-white transition-opacity"
                    aria-label="Delete task">
                    <TrashIcon />
                </button>
            )}
        </div>
    )
}

export default TaskCard