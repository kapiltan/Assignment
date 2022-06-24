const express = require('express')

const Article = require('./models/article')
const articleRouter=require('./routes/articles')
const app = express()

// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.connect('mongodb+srv://kapil:kapil123@cluster0.y2mvx8i.mongodb.net/Results?retryWrites=true&w=majority').then(()=> {
//     app.listen(PORT, () => {
//         console.log(`Listening on port` + PORT);
//     })
// }).catch((e) => {console.log(e)})

app.set('view engine', 'ejs')


app.use(express.urlencoded({ extended: false }))

app.get('/' , async (req,res) => {
    // const articles = await Article.find()
    const articles = [{
        student: 'Kapil',
        test1: 88,
        test2: 81,
        test3: 78,
        test4: 86,
        test5: 98
    },
    {
        student: 'Ajay',
        test1: 88,
        test2: 81,
        test3: 78,
        test4: 86,
        test5: 98
    }]
    res.render('articles/index', {articles: articles})
})
app.use('/articles', articleRouter)

app.listen(5000)