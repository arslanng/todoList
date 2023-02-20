import { useState } from 'react';
import './App.css';
import List from "./companent/List";
import Add from "./companent/Add";
import Footer from "./companent/Footer";

function App() {
  const [situation, setSituation] = useState("All")
  const [todo, setTodo] = useState([
    {
      "done": true,
      "text": "Taste JavaScript"
    },
    {
      "text": "Code furiously",
      "done": true
    },
    {
      "text": "Promote Mavo",
      "done": false
    },
    {
      "text": "Give talks",
      "done": false
    },
    {
      "text": "Write tutorials",
      "done": true
    },
    {
      "text": "Have a life!",
      "done": false
    }
  ])
  return (
    <div className="App">
      <Add todo={todo} setTodo={setTodo}/>
      <List todo={todo} setTodo={setTodo} situation={situation}/>
      <Footer situation={situation} setSituation={setSituation} todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
