import { useEffect, useState } from "react";
import Todo from "./component/Todo";
import { addTodo,getAllToDO,updateTodo,deleteTodo } from "./utils/HandleApi";

function App() {

 const[toDo,setToDo] = useState([]);
 const[text,setText] = useState("");
 const[isupdating,setisupdating] =useState(false);
 const[toDoId,settoDOid] =useState("");
 
 useEffect(() => {
    getAllToDO(setToDo)
 },[])

 const updatemode = (_id,text) =>{
  setisupdating(true)
  setText(text)
  settoDOid(_id)
}

  return (
    <div className="App">
      <div className="container">
        <h1>TODO List</h1>

        <div className="top">
           <input className="inputbox" 
           type="text" 
           placeholder="Add ToDos..."
           value={text}
           onChange={(e) => setText(e.target.value)}
           />

           <div className="add" 
           onClick={isupdating ? () => updateTodo(toDoId,text,setText,setToDo,setisupdating) :
                    ()=> addTodo(text,setText,setToDo)}>
                 {isupdating ? "UpDated" : "Add"}
           </div>

        </div>

        <div className="list">

          {toDo.map((item) => <Todo 
          key={item._id} 
          text={item.text}
          updatemode = {()=> updatemode(item._id, item.text)}
          deleteTodo = {() => deleteTodo(item._id,setToDo)}
          />)}
          
        </div>
      </div>
    </div>
  );
}

export default App;
