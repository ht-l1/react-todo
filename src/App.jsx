import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Above the App() function, create an empty Array and store it in a variable named todoList
// Inside the Array, create at least 3 Objects with the properties
const todoList = [
  { id: 1, title: "HelloCoding" },
  { id: 2, title: "TodayIsSaturday" },
  { id: 3, title: "CompleteAssignment" }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <ul>
          {/* Inside the JavaScript expression, map over your todoList array
              For each Object in the Array, return a list item (<li>) with the following:
                key attribute with value of id property
                inner text content with value of title property */}
          {/* using variable name todo to represent each element/object in the array */}
          {todoList.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
