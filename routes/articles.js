const express=require('express')
const Article = require('./../models/article')
const router = express.Router()

router.get('/new', (req,res) => {
    res.render('articles/new', {article: new Article()})
})


router.post('/', async (req,res) => {
    let article = new Article({
        student: req.body.student,
        test1: req.body.test1,
        test2: req.body.test2,
        test3: req.body.test3,
        test4: req.body.test4,
        test5: req.body.test5
    })
    try {
        article = await article.save()
        res.redirect('/')
    } catch (e) {
        res.render('articles/new', { article: article })
    }
})

module.exports = router