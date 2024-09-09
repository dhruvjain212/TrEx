const UserModel = require("../Models/User")

const addExpenses = async(req, res)=>{
    const body = req.body
    const {_id} = req.user
    // console.log(body, _id)
    // res.send("successfully added expenses!")
    try{
        const userData = await UserModel.findByIdAndUpdate(
            _id,// it is user id
            {
                $push: {expenses: body}
            },
            { new: true}//it returns the updated document to the user
        );
        return res.status(200).json({
            message:"Expense added successfully",
            success: true,
            data: userData?.expenses  
        })
    }catch(err){
        return res.status(500).json({
            message: " Something went wrong! ",
            error: err,
            success: false
        })
    }
}

const fetchExpenses = async(req, res)=>{
    //res.send("fetch expenses!")
    const body = req.body
    const {_id} = req.user
    // console.log(body, _id)
    // res.send("successfully added expenses!")
    try{
        const userData = await UserModel.findById(_id).select('expenses')

        return res.status(200).json({
            message:"Expense fetched successfully",
            success: true,
            data: userData?.expenses  
        })
    }catch(err){
        return res.status(500).json({
            message: " Something went wrong! ",
            error: err,
            success: false
        })
    }
}

const deleteExpenses = async (req, res)=>{
    // res.send("delete expenses!")
 
    const {_id} = req.user
    const {expenseId} = req.params
    // console.log(body, _id)
    // res.send("successfully added expenses!")
    try{
        const userData = await UserModel.findByIdAndUpdate(
            _id,// it is user id
            {
                $pull: {expenses: {_id: expenseId}}  //expense will be pulled(i.e. deleted) from expense error from db
            },
            { new: true}//it returns the updated document to the user
        );
        return res.status(200).json({
            message:"Expense deleted successfully",
            success: true,
            data: userData?.expenses  
        })
    }catch(err){
        return res.status(500).json({
            message: " Something went wrong! ",
            error: err,
            success: false
        })
}
}

module.exports = {
    addExpenses,
    fetchExpenses,
    deleteExpenses,
}