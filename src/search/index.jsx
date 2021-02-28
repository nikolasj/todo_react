import React from 'react';
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import './styles.css';

const Search = props => {
  const onChangeHandler = ({ currentTarget }) => {
    props.onChange(currentTarget.value);
  };

  return (
    <>
      <SearchIcon />
      <input
        type="text"
        className="search"
        value={props.value}
        onChange={onChangeHandler}
        placeholder="Searching"
      />
    </>
  );
};

export default Search;
