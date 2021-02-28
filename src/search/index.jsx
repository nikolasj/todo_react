import React from 'react';
import './styles.css';
import TodoList from "../todos";
import todos from "../mock";

const Search = props => {
    // 1. разметку, т.е. использовтаь input и застилизовать (border, width, height)
    // 2. useState в todoList (search state)
    // 3. props onChange (из useState) для Search component
    return (
        <input type="text" className="search" onChange={({target: {value}}) => props.searchUpdate(value)}
               placeholder="Searching"/>
    );
};

export default Search;
