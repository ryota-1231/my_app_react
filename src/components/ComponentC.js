import React, { useContext } from 'react';
import { UserCount } from '../App';

const ComponentC = () => {
  const { state, dispatch } = useContext(UserCount);
  return (
    <div>
      <p>Component C</p>
      <p>{state.count}</p>
      <button onClick={() => dispatch('INCREMENT')}>+</button>
    </div>
  );
};

export default ComponentC;