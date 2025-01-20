import {createContext,useState} from "react";

export let counterContext = createContext(0) ; 
export default function CounterContextProvider(props) {
    const [counter,setCounter]=useState(10)
    const [userName,setUserName]=useState("michael")
    function incrementCounter() {
       setCounter(counter+1)
    }
    function decrementCounter() {
       setCounter(counter-1)
    }
    return <counterContext.Provider value={{counter,userName,incrementCounter,decrementCounter}}>
{props.children}
    </counterContext.Provider>
} 