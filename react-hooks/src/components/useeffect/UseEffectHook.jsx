import React, {useState, useEffect} from 'react'

/* useEffect()tells React do some code when(pick one):
This Component : re-render; mounts; the state of a value

useEffect(function, [dependencies])
1: useEffect((）=> {})     runs after every re-render
2: useEffect((）=> {}, [])   Runs only on mount
3: useEffect((）=> {}, [value])   Runs on mount + when value changes 

Usages:
1 Event Listener (onClick, onChange)
2  DOM manipulation (DOM elements change)
3 Subscriptions (real-time updates)
4 Fetching Data when a component unmounts
5 clean up code when a component unmounts
*/ 
const UseEffectHook = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")
  
    useEffect(()=>{
      document.title = `Count: ${count} ${color}`;
    }, [count, color])
  
    const handleAdd = () => {
      setCount((count) => count + 1);
    };
    const handleSubtract = () => {
      setCount((count) => count - 1);
    };
    const changeColor=()=>{
       setColor((color)=> color === "green"? "red" : "green")
    }
    return (
      <>
        <div className="counter">
          <h1 style={{color: color}}>Count: {count}</h1>
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleSubtract}>Subtract</button>
          <button onClick={changeColor}>Change color</button>
        </div>
      </>
    );
}

export default UseEffectHook
