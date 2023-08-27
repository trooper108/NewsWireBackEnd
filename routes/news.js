const express = require('express');
const router = express.Router();
// CRED
// model
const News = require('../models/news')
//Index
router.get('/news',async(req,res)=>{
    try {
        const news = await News.find();
        res.json(news);
    } catch (error) {
        console.log(error)
    }
});
// new
// router.get('/news/new',(req,res)=>{});
// create
router.post('/news',async(req,res)=>{
    try {
        const newNews = new News(req.body.news);
        await newNews.save();
        res.json('ok');
    } catch (error) {
        console.log(error);
    }
});
// show
router.get('/news/:id',async(req,res)=>{
    try {
        const news = await News.findById(req.params.id);
        res.json(news);
    } catch (error) {
        console.log(error);
    }
})

// edit
router.get('/news/:id/edit',async(req,res)=>{
    try {
        const news = await News.findById(req.params.id);
        res.json(news);
    } catch (error) {
        console.log(error);
    }
});
// update
router.patch ('/news/:id',async(req,res)=>{
    try {
        await News.findByIdAndUpdate(req.params.id,req.body.news);
        res.json('okay');
    } catch (error) {
        console.log(error);
    }
});
// delete
router.delete('/news/:id',async(req,res)=>{
    try {
        await News.findByIdAndDelete(req.params.id);
        res.json('ok');
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;