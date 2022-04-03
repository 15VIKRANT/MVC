const express=require("express");
const app=express()
const cors=require("cors")
app.use(express.json());
app.use(cors({origin:"http://127.0.0.1:5000"}))
//

const studentController=require("./controllers/student.controller");
const userController=require("./controllers/users.controller")
const batchcontroller=require("./controllers/batch.controller");
const evaluationcontroller=require("./controllers/evaluation.controller");
const submissioncontroller=require("./controllers/submission.controller")

app.use("/users" ,userController);
app.use("/students",studentController)
app.use("/batches",batchcontroller)
app.use("/evaluations",evaluationcontroller)
app.use("/submissions",submissioncontroller)

module.exports=app;