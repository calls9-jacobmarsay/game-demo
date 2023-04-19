import React from 'react';

function SearchInput(props) {
  return (
    <div className="search__input">
      <input type="text" placeholder="Search..." onChange={props.onChange} />
      <button onClick={props.onClick}>Search</button>
    </div>
  );
}

export default SearchInput;
