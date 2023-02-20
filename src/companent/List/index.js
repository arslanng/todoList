import React, { useState } from 'react'

function List({todo, setTodo, situation}) {
    const [filter, setFilter] = useState('')
    const filtered = todo.filter((item) => 
    item["text"]
    .toString()
    .toLowerCase()
    .includes(filter.toLowerCase())
    )
    
  return (
    <div>
       
    <section className="main">

		<input property="toggleAll" id="toggle-all"
				 className="toggle-all" type="checkbox" />
		<label htmlFor="toggle-all" mv-action="set(done, !toggleAll)">
			Mark all as complete
		</label>

		<ul className="todo-list">
            {filtered.map((doIt, i)=>{
              if(situation==='All'){
                return <li key={i} className={doIt.done ? 'completed': ''}>

                <div className="view">
                            
                  <input property="done" className="toggle" type="checkbox" checked={doIt.done} onChange={()=>{
                    let array = [...todo]
                    array[i].done = !array[i].done
                    setTodo(array)
                  }}/>
                  <label property="text">{doIt.text}</label>
                  <button className="destroy" onClick={() => {
                                let x = filtered
                                x.splice(i, 1)
                                console.log(`delete ${i}`)
                                setTodo(x)
                                console.log({todo})
                            } }></button>
                </div>
        
              </li>
              }
              else if(situation==='Active'){
                if(!doIt.done){
                  return <li key={i}>

                <div className="view">
                            
                  <input property="done" className="toggle" type="checkbox" checked={doIt.done} onChange={()=>{
                    let array = [...todo]
                    array[i].done = !array[i].done
                    setTodo(array)
                  }}/>
                  <label property="text">{doIt.text}</label>
                  <button className="destroy" onClick={() => {
                                let x = filtered
                                x.splice(i, 1)
                                console.log(`delete ${i}`)
                                setTodo(x)
                                console.log({todo})
                            } }></button>
                </div>
        
              </li>
                }
              } else if (situation==="Completed"){
                if (doIt.done){
                  return <li key={i} className='completed'>

                <div className="view">
                            
                  <input property="done" className="toggle" type="checkbox" checked={doIt.done} onChange={()=>{
                    let array = [...todo]
                    array[i].done = !array[i].done
                    setTodo(array)
                  }}/>
                  <label property="text">{doIt.text}</label>
                  <button className="destroy" onClick={() => {
                                let x = filtered
                                x.splice(i, 1)
                                console.log(`delete ${i}`)
                                setTodo(x)
                                console.log({todo})
                            } }></button>
                </div>
        
              </li>
                }
              }
            })
            } 
              
		</ul>
        <form>
			<input property="newTodo" className="new-todo"
					 placeholder="Search"
					 autoFocus value={filter} onChange={(e) => setFilter(e.target.value)} />
		</form>
	</section>
    </div>
  )
}

export default List