import Express from "express";
import registerController from '../controllers/registerController.js';
import userModel from "../models/userModel.js";



// router object 
const router = Express.Router();

// routing
// REGISTER
router.post('/register', registerController);

router.get("/users",async(req,res)=>{
 const ans=await userModel.find();
 res.json({arr:ans})
})

router.post("/deleteUser",async(req,res)=>{
    const {email}=req.body
    const ans=await userModel.findOneAndDelete({email});
    res.json({arr:ans})
   })

export default router;