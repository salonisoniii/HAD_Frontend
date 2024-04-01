import React, { createContext } from 'react'
import all_details from '../Assets/all_details';

export const Context = createContext(null);

const ContextProvider = (props) => {

    const contextValue = {all_details};
  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}



export default ContextProvider;
