import { SortableContext, useSortable } from "@dnd-kit/sortable";
import TrashIcon from "../icons/TrashIcon";
import type { Column, Id, Task } from "../types"
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import PlusIcon from "../icons/PlusIcon"
import TaskCard from "./TaskCard";


interface Props {
    column: Column;
    deleteColumn: (id: Id) => void;
    updateColumn: (id: Id, title: string) => void;
    createTask: (columnId: Id) => void;
    deleteTask: (id: Id) => void;
    updateTask: (id: Id, content: string) => void;
    tasks: Task[];
}

const ColumnContainer = (props: Props) => {
    const { column, deleteColumn, updateColumn, createTask, tasks, deleteTask, updateTask } = props;
    const [editMode, setEditMode] = useState(false);

    const tasksIds = useMemo(() => {
        return tasks.map((task) => task.id);
    }, [tasks])

    const { attributes, listeners, setNodeRef, transform, transition, isDragging }
        =
        useSortable({
            id: column.id,
            data: {
                type: "Column",
                column,
            },
            disabled: editMode,
        })

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    }

    if (isDragging) {
        return (
            <div ref={setNodeRef} style={style}
            className="
            opacity-50
             w-[350px]
            h-[500px] 
            max-h-[500px]
            border-2
            border-amber-300
            bg-gray-700">

            </div>
        )
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="bg-[#2B3137]
            hover:bg-[#32383F]
            text-[#C7D1DB]
            w-[350px]
            h-[500px]
            flex flex-col
            rounded-lg
            p-1
            shadow-sm ">
            {/* column title */}
            <div
                {...attributes}
                {...listeners}
                onClick={() => {
                    setEditMode(true);
                }}
                className="bg-[#2B3137] border-b border-[#969799] text-lg h-[60px] p-3 font-bold flex justify-between items-center rounded-t-2xl cursor-grab select-none"
                role="button"
                aria-label="Drag column"
                tabIndex={tasks.length}
                onKeyDown={(e) => { if (e.key === 'Enter') setEditMode(true); }}>
                <div className="flex gap-2">
                    <div className="flex items-center justify-center px-3 py-1 text-sm bg-gray-800 text-white rounded-full shadow-sm">
                        {tasks.length}
                    </div>
                    {!editMode && <span className="ml-2 text-white">{column.title}</span>}
                    {editMode && (
                        <input
                            value={column.title}
                            onChange={e => updateColumn(column.id, e.target.value)}
                            autoFocus
                            onBlur={() => {
                                setEditMode(false);
                            }}
                            onKeyDown={(e) => {
                                if (e.key !== "Enter") return;
                                setEditMode(false);
                            }}
                        />
                    )}
                </div>
                <button
                    onClick={(e) => { e.stopPropagation(); deleteColumn(column.id); }}
                    className="p-2 rounded-full bg-transparent hover:bg-rose-600 transition-colors"
                    aria-label="Delete column">
                    <TrashIcon />
                </button>
            </div>



            <div className="flex flex-grow flex-col gap-4 gap-2 overflow-x-hidden overflow-y-auto p-4">

                <SortableContext items={tasksIds} >
                    {tasks.map((task) => (
                        <div key={task.id} className="task">
                            <TaskCard task={task} deleteTask={deleteTask} updateTask={updateTask} />
                        </div>
                    ))}
                </SortableContext>

            </div>

            <button
                className="
                    flex items-center gap-2 p-3
                    bg-[#22272B]
                    hover:bg-[#2B3137]
                    text-[#9FADBC]
                    hover:text-[#579DFF]
                    rounded-b-2xl
                    justify-center
                    mt-2
                    transition-colors duration-200"
                onClick={(e) => { e.stopPropagation(); createTask(column.id) }}
            ><PlusIcon /> <span className="font-semibold">Add Task</span></button>

        </div>
    )
}

export default ColumnContainer
