import React from 'react';
import {v1} from 'uuid';
import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {AddTaskAC, ChangeTaskStatusAC, ChangeTaskTitleAC, RemoveTaskAC, tasksReducer} from "./tasks-reducer";

test('correct task should be removed', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "HTML&CSS", isDone: true},
            {id: "2", title: "JS", isDone: true}
        ],
        "todolistId2": [
            {id: "1", title: "Milk", isDone: true},
            {id: "2", title: "React Book", isDone: true}
        ]
    }

    const endState = tasksReducer(startState, RemoveTaskAC("2","todolistId2"))

    expect(endState).toEqual({
        "todolistId1": [
            {id: "1", title: "HTML&CSS", isDone: true},
            {id: "2", title: "JS", isDone: true}
        ],
        "todolistId2": [
            {id: "1", title: "Milk", isDone: true},
        ]
    })
});

test('correct task should be added', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "HTML&CSS", isDone: true},
            {id: "2", title: "JS", isDone: true}
        ],
        "todolistId2": [
            {id: "1", title: "Milk", isDone: true},
            {id: "2", title: "React Book", isDone: true}
        ]
    }

    const endState = tasksReducer(startState, AddTaskAC("juce","todolistId2"))

   expect(endState["todolistId1"].length).toBe(2)
   expect(endState["todolistId2"].length).toBe(3)
   expect(endState["todolistId2"][0].id).toBeDefined()
   expect(endState["todolistId2"][0].title).toBe("juce")
   expect(endState["todolistId2"][0].isDone).toBe(true)
});

test('correct task should change its name', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "HTML&CSS", isDone: true},
            {id: "2", title: "JS", isDone: true}
        ],
        "todolistId2": [
            {id: "1", title: "Milk", isDone: true},
            {id: "2", title: "React Book", isDone: true}
        ]
    }

let newTitle = "New Title"
    const action = ChangeTaskTitleAC("2","todolistId2",newTitle);

    const endState = tasksReducer(startState, action);

    expect(endState["todolistId2"][1].title).toBe(newTitle)
    expect(endState["todolistId2"][0].title).toBe("Milk")

});

test('correct task should change its title', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "HTML&CSS", isDone: true},
            {id: "2", title: "JS", isDone: true}
        ],
        "todolistId2": [
            {id: "1", title: "Milk", isDone: true},
            {id: "2", title: "React Book", isDone: true}
        ]
    }

    const action = ChangeTaskStatusAC("2", "todolistId2", false);

    const endState = tasksReducer(startState, action);

    expect(endState["todolistId2"][1].isDone).toBe(false)
    expect(endState["todolistId2"][0].isDone).toBe(true)
})


