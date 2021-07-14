import React, { useReducer } from 'react';
import ComponentA from './components/ComponentA';

export const UserCount = React.createContext();

const initialState = {
  count: 100,
};

function App() {
  
  const reducer = (state, action) => {
    if (action === 'INCREMENT') {
      return { count: state.count + 1 };
    } else {
      return { count: state.count - 1 };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: 'center' }}>
      <UserCount.Provider value={{ state, dispatch }}>
        <h1>Learn useContext</h1>
        <ComponentA />
      </UserCount.Provider>
    </div>
  );
}

export default App;