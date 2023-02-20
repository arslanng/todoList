import React, { useState } from 'react'

function Add({todo, setTodo}) {
    const [form, setForm] = useState("")
    const onSubmit = (e) => {
        if(!form){
        return false    
        }
        e.preventDefault()
        setTodo([...todo, {["text"]: form,
        ["done"]: false}])
        setForm("")
    }
  return (
    <div>  
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={onSubmit}>
                <input property="newTodo" className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus value={form} onChange={(e) => setForm(e.target.value)} />
            </form>
        </header>   
    </div>
  )
}

export default Add