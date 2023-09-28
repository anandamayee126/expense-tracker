const express= require('express');
const router= express.Router();
const Expense_model= require('../model/expense');
const database= require('../database/db');

router.post('/expense',(req,res,next) => {
    const id= Math.random();
    const amount=req.body.amount;
    console.log(amount);
    const description=req.body.description;
    const category=req.body.category;
    const Expense= new Expense_model(id,amount, description, category);
    Expense.save.then((result)=>{
        result.json;

    }).catch((err) => {
        console.log(err);
    })
})

router.get('/', (req, res) => {
    Expense_model.fetchAll()
    .then((result) => {
        console.log(result);
        res.json({result});
    }).catch((err) => {
        console.error(err);
    })
})

router.delete('/delete/:id' , (req,res)=>{
    Expense_model.deleteById(req.params.id).then(()=>{
        return res.status(200).json({success : true})
    }).catch(e => {
        console.log(e)
        return res.status(403).json({success : false})
    })
})

module.exports= router;
