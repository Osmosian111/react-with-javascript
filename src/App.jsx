import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="background">
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}

export default App;
