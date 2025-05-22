import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllToDO = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data --->', data);
        setToDo(data)
    })
    .catch((err)=> console.log(err))
}

const addTodo = (text,setText, setTodo) =>{
    axios
    .post(`${baseUrl}/save`,{text})
    .then((data)=>{
        console.log(data);
        setText("")
        getAllToDO(setTodo)
    })
     .catch((err)=> console.log(err))
}

const updateTodo = (toDoId,text,setText, setTodo,setisupdating) =>{
    axios
    .post(`${baseUrl}/update`,{_id:toDoId,text})
    .then((data)=>{
        setText("")
        setisupdating(false)
        getAllToDO(setTodo)
    })
    .catch((err)=> console.log(err))
}

const deleteTodo = (_id,setToDo) =>{
    axios
    .post(`${baseUrl}/delete`,{_id})
    .then((data)=>{
        console.log(data)
        getAllToDO(setToDo)
    })
    .catch((err)=> console.log(err))
}

export{getAllToDO,addTodo,updateTodo,deleteTodo }