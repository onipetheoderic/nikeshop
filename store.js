import React, { useState, createContext, useReducer } from "react";

// Create Context Object
const initialState = {
    count:0,
    selectedItems: [],
    total:0
};
export const CounterContext = createContext(initialState);


// Create a provider for components to consume and subscribe to changes
export const CounterContextProvider = props => {
//   const [count, setCount] = useState(0);
//   const [products, changeProducts] = useState([]);
//   const increment = () => {
//     setCount(count + 1);
//   };
  
//   const decrement = () => {
//     setCount(count - 1);
//   };



  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
        
        case 'selectItem':
            
            let total = action.payload.productPrice;
            let accumulatedTotal = state.total+total
            return {...state, total:accumulatedTotal, selectedItems: state.selectedItems.concat(action.payload)}
        
        case 'incrementQty':          
            return {...state, selectedItems: action.payload.myArray, total:action.payload.total}
        case 'decrementQty':       
            return {...state, selectedItems: action.payload.myArray2, total:action.payload.total}
        default:
            throw new Error();
        };
  },initialState)
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
};