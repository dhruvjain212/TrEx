const UserModel = require("../Models/User")

const viewInsights = async(req, res)=>{
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

module.exports = {
    viewInsights,
}