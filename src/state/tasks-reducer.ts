import {TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    taskId: string
    todolistId: string
}
export type AddTaskActionType = {
    type: 'ADD-TASK',
    title: string,
    todolistId: string
}
export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE',
    TaskId: string
    todolistId: string
    newTitle:string
}
export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS',
    taskId: string
    todolistId: string
    isDone:boolean
}

type ActionsType = RemoveTaskActionType | AddTaskActionType | ChangeTaskTitleActionType | ChangeTaskStatusActionType;

export const tasksReducer = (state: Array<TasksStateType>, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK':
            const todolistTASKS = state.tasks[action.todolistId]
            state.tasks[action.todolistId] = todolistTASKS.filter(t => t.id !== action.taskId)
            return {...state}
        case 'ADD-TASK':
            const task = {id: v1(), title: action.title, filter: "all"}
            const todolistTasks = state.tasks[action.todolistId]
            state.tasks[action.todolistId] = [task, ...todolistTasks]
            return {...state}
        case 'CHANGE-TASK-TITLE': {
            const todolistTasks = state.tasks[action.todolistId]
            let task = todolistTasks.find(t => t.id === action.TaskId)
            if (task) {
                // если нашёлся - изменим ему заголовок
                task.title = action.newTitle;
            }
            return {...state}
        }
        case 'CHANGE-TASK-STATUS': {
            const todolistTasks = state.tasks[action.todolistId]
            let task = todolistTasks.find(t => t.id === action.TaskId)
            if (task) {
                task.isDone = action.isDone;
            }
            return {...state};
        }
        default:
            throw new Error("I don't understand this type")
    }
}

export const RemoveTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return { type: 'REMOVE-TASK', taskId: taskId, todolistId:todolistId}
}
export const AddTaskAC = (title: string, todolistId: string): AddTaskActionType => {
    return { type: 'ADD-TASK', title: title, todolistId: todolistId}
}
export const ChangeTaskTitleAC = (TaskId: string, todolistId: string, newTitle:string): ChangeTaskTitleActionType => {
    return { type: 'CHANGE-TASK-TITLE', TaskId: TaskId, todolistId:todolistId, newTitle: newTitle}
}
export const ChangeTaskStatusAC = (taskId: string, todolistId: string, isDone:boolean): ChangeTaskStatusActionType => {
    return { type: 'CHANGE-TASK-STATUS', taskId:taskId, todolistId: todolistId, isDone: isDone}
}
