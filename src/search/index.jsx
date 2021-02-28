import React from 'react';
import './styles.css';

const Search = props => {
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
