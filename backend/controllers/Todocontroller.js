const TodoModel = require('../models/Todomodels')


module.exports.getToDo= async (req,res) =>{
    const toDo = await TodoModel.find()
    res.send(toDo)
}

module.exports.saveTodo = async (req,res) =>{
    const {text} = req.body
       
TodoModel
    .create({text})
    .then((data) => {
        console.log("Added Successfully...");
        console.log(data);
        res.send(data)
    })
}

module.exports.todoupdate = async (req,res) =>{
     const{_id,text} = req.body
     
     TodoModel
       .findByIdAndUpdate(_id,{text})
       .then(()=> res.status(200).send("Updated Successfully...."))
       .catch((err)=> console.log(err))
}

module.exports.tododelete = async (req, res) => {
  const { _id } = req.body  

  TodoModel
    .findByIdAndDelete(_id)
    .then(() => res.status(200).send("Deleted Successfully...."))
    .catch((err) => {
      console.error(err)
      res.status(500).send("Error deleting todo")
    })
}
