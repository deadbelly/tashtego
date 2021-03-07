import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import DotLoader from "react-spinners/DotLoader";
import './Loader.css'

export const Loader = () => {

  return (
    <div className='loader'>
      <DotLoader loading={usePromiseTracker().promiseInProgress} color={'#efdecd'} size={'20vh'} />
    </div>
  );
}
