import "./styles.css";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  
  const minus=()=>{
    setCount(count-1)
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={increment}>increment</button>
      <button onClick={minus}>decrement</button>

      <h2>count is now {count} !</h2>
    </div>
  );
}
