import { useState } from 'react'
import Dashboard from "./Dashboard";
import { Provider } from "./globalVariables/dataContext";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  eturn (
    <Provider>
      <div className="App">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App
