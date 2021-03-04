import React from 'react';
import './App.css';
import { Search }from '../Search/Search'
import { getEditionKeys } from '../../api_calls'

export const App = () => {
  return (
    <div className="App">
      <Search />
    </div>
  );
}
