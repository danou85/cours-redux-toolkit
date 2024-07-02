import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: [ 
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
    ],

    reducers: {
        addTask: (state, action) => {
            // {type: "ADD_TASK", playload: "Allez faire les courses"}
            const newTask = {
                id: Date.now(),
            }
        },
        toggleTask: () => {},
        deleteTask: () => {},
    }
})