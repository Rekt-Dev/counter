import "./styles.css";
import { useState } from "react";
import Child from "./Child.js"
export default function App() {

const[name,setName]  =useState("name")
const changeName=()=>{
  setName("ofknfear")
}
  
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  
  const minus=()=>{
    setCount(count-1)
  }

  return (
    
    <div className="App">
      <div> 
        <div>
      <h1>{name}</h1>
      <div>div {count}</div>
      <Child name={name}/>
      <button onClick={increment}>increment</button>
      <button onClick={minus}>decrement</button>
      <button onClick={changeName}>change name</button>
      <h2>count is now {count} !</h2>
</div>
    </div>
    
    </div>
  );
}
