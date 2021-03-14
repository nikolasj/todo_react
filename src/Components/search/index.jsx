import React from 'react';
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import './styles.scss';

const Search = props => {
  const onChangeHandler = ({ currentTarget }) => {
    props.onChange(currentTarget.value);
  };

  return (
    <>
      <SearchIcon className="search-icon" />
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
