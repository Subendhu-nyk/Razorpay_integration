const User = require('../models/user');
const Expense = require('../models/expense');
const sequelize = require('../util/expense');
const user = require('./user');

const getUserLeaderBoard=async(req,res)=>{
    try{
        const users= await User.findAll();
        const expenses=Expense.findAll();
        const userAggregatedExpenses={}
        expenses.forEach((expense)=>{
            if(userAggregatedExpenses[expense.userId]){
                userAggregatedExpenses[expense.userId]=userAggregatedExpenses[expense.userId]+[expense.price]
            }else{
                userAggregatedExpenses[expense.userId]=expense.price
            }
            
        })
        console.log(userAggregatedExpenses);
        res.status(200).json(userAggregatedExpenses)
        
    }

    catch(err){
        console.log(err)
    }
}

module.exports={
    getUserLeaderBoard
}