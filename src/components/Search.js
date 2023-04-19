import React from 'react';
import { useState } from 'react';
import { fetchSearch } from '../store/slice/gamesSlice';
import { useDispatch } from 'react-redux';

function SearchInput() {
    const [textInput, setTextInput] = useState('');
    const dispatch = useDispatch();
    
    const inputHandler = (e) => {
        setTextInput(e.target.value);
    }

    const submitSearchHandler = (e) =>{
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput('');
    }
  return (
    <form className="search__input">
      <input value={textInput} onChange={inputHandler} type="text" placeholder="Search..." />
      <button type='submit' onClick={submitSearchHandler}>Search</button>
    </form>
  );
}

export default SearchInput;
