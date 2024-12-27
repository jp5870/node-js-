const Student = require ("../Model/StudentsModel")

const store = async (req,res)=>{
const student = await Student.create(req.body)
console.log(req.body)
res.json("pending")
}

const index = async(req,res)=>{
  const student = await Student.find()
  res.json({
    susccess:true,
    student
  })

}
const single = async(req,res)=>{
  const id = req.params.id
  console.log(id);
  
const student= await Student.findById({_id:id})
res.json({
  success:true,
  student
})
}
const trash = async (req,res)=>{
  const{id}= req.params;
  console.log(id)
  const student = await Student.findByIdAndDelete(id)
  res.json("record delete")
}

module.exports={store,index,single,trash}