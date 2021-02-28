import React from 'react';
import './styles.css';

const Search = props => {
  // 1. разметку, т.е. использовтаь input и застилизовать (border, width, height)
  // 2. useState в todoList (search state)
  // 3. props onChange (из useState) для Search component
  const onChangeHandler = ({ currentTarget }) => {
    props.onChange(currentTarget.value);
  };

  return (
    <input
      type="text"
      className="search"
      value={props.value}
      onChange={onChangeHandler}
      placeholder="Searching"
    />
  );
};

export default Search;
