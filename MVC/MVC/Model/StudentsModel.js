const {Schema,model}=require("mongoose")
const studentSchema = new Schema ({

  std_name: String,
  std_email: String,
  std_grid : Number
})

const student = model('student',studentSchema)
module.exports=student;