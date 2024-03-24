import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        { id: 1, title: 'Learn React', completed: true },
        { id: 2, title: 'Learn Redux', completed: false },
        { id: 3, title: 'Learn Redux Toolkit ', completed: false },
        { id: 4, title: 'Learn React Native', completed: true },
        { id: 5, title: 'Learn ReactJs', completed: false },
    ],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            });
        },
    },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
