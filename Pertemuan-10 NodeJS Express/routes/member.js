const express = require("express");

const memberModel = require('../models/Member');

const router = express.Router();

module.exports = () => {
    router.get("/", (request, response) => {
        response.json({
            body:{
                message:'ini router member',
            },
        });
    });

    router.post('/add', async (req, res)=>{
        const member = new memberModel({
            name: req.body.name,
            email: req.body.email,
            credit: req.body.credit,
        });

        //res.send(member);

        const save = await member.save();

        try{
            res.send(save);
        }catch(err){
            res.send(err);
        }
    });

    router.get('/all', async (req, res) => {
        const members = await memberModel.find();

        try{
            res.send(members);
        }catch(err){
            res.send(err);
        }
    });

    router.get('/:id', async (req, res) => {
        const id = req.params.id;

        const members = await memberModel.findById(id);

        try{
            res.send(members);
        }catch(err){
            res.send(err);
        }
    });

    router.get('/email/:email', async (req, res) => {
        const email = req.params.email;

        const members = await memberModel.find({email:email});

        try{
            res.send(members);
        }catch(err){
            res.send(err);
        }
    });

    router.get('/credit/:credit', async (req, res) => {
        const credit = req.params.credit;

        const members = await memberModel.where('credit').equals(credit);

        try{
            res.send(members);
        }catch(err){
            res.send(err);
        }
    });

    router.delete('/del/:id',async (req,res) => {
        const id = req.params.id;

        const deletemembers = await memberModel.deleteMany({
            _id:id,
        });

        try{
            res.send(deletemembers);
        }catch(err){
            res.send(err);
        }
    });

    router.patch('/update/:id',async (req,res) => {
        const id = req.params.id;

        const update = await memberModel.update({
            _id:id,
        },
        {
            $set:req.body,
        }
        );
        try{
            res.send(update);
        }catch(err){
            res.send(err);
        }
    })

    return router;
};
