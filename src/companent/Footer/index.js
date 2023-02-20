import React from 'react'

function Footer({situation, setSituation ,todo, setTodo}) {
    const onClickAvailable = async(e) => {
        await setSituation(e.target.name)
        console.log(situation)
    }
    const kalan = todo.filter((item)=> item.done === false)
  return (
    <div>
        <footer className="footer">
            <span className="todo-count">
                <strong>{kalan.length===0 ? `Completed` : kalan.length}</strong> &nbsp;{kalan.length===0 ? `` : 'items left'} 
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" name="All" className={situation ==="All" ? "selected":""} onClick={onClickAvailable}>All</a>
                </li>
                <li>
                    <a href="#/" name="Active" className={situation ==="Active" ? "selected":""}  onClick={onClickAvailable}>Active</a>
                </li>
                <li>
                    <a href="#/" name="Completed" className={situation ==="Completed" ? "selected":""}  onClick={onClickAvailable}>Completed</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={()=>setTodo(kalan)}>
                Clear completed
            </button>

            <footer className="info">
                <p>Click to edit a todo</p>
                <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
                <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </footer>
        </footer>
    </div>
  )
}

export default Footer