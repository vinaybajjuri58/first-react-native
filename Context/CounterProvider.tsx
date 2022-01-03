import React, {createContext,useContext,useReducer} from "react";

export type InitialState = {
    count:Number
}

export type Action = 
  | {
    type:"INCREMENT"
} | {
    type:"DECREMENT"
}

const initialData = {
    count:0
}

const CounterContext = createContext<{
    counterState:InitialState;
    dispatch:React.Dispatch<Action>
}>({
    counterState:initialData,
    dispatch:()=>null
});

const reducerFunction = (state:InitialState,action:Action):InitialState=>{
    switch (action.type) {
        case "INCREMENT" :
            return {
                ...state,
                count:Number(state.count)+1
            }
        case "DECREMENT":
            return {
                ...state,
                count:Number(state.count)-1
            }
        default:
            return {
                ...state
            }
    }
}

export const CounterProvider = ({children}:any)=>{
    const [counterState,dispatch] = useReducer(reducerFunction,initialData)
    return(
        <CounterContext.Provider value={{counterState,dispatch}} >
            {children}
        </CounterContext.Provider>
    )
}

export const useCounter = ()=>{
    return useContext(CounterContext)
}