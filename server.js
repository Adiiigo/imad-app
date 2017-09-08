var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = 
{
     'article-one' : {
    title: 'Article one | Aditi Goyal',
    heading:'Article One',
    date:'Sept  9 ,2017',
    content:`   <p>
                   This is content of my First Article. This is content of my First Article.This is content of my First Article.This is content of my First Article.
                </p>
                
                <p>
                    This is content of my First Article.This is content of my First Article.This is content of my First Article.This is content of my First Article.
                </p>
                
                 <p>
                    This is content of my First Article.This is content of my First Article.This is content of my First Article.This is content of my First Article.
                </p>`
} ,
     'article-two' : {
    title: 'Article Two | Aditi Goyal',
    heading:'Article Two',
    date:'Sept  10 ,2017',
    content:
                `   
                <p>
                   This is content of my Second Article. 
                </p>
                `
} ,
     'article-three' : {
    title: 'Article Three | Aditi Goyal',
    heading:'Article Three',
    date:'Sept  11 ,2017',
    content:
                `   
                <p>
                   This is content of my Three Article. 
                </p>
                `
} 
};

function createTemplate(data)
{
    var title = data.title ;
    var date = data.date ;
    var heading = data.heading ;
    var content = data.content ;
    
    var htmlTemplate = 
    `
    <HTML>
        <HEAD>
            <TITLE>
               ${title}     
            </TITLE>
            <meta name="viewport" content="width=device-width , intial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </HEAD>
        <BODY>
            <DIV class="container">
                <DIV>
                    <A HREF="/">HOME</A>
                </DIV>
                <HR/>
                <H3>
                    ${heading}
                </H3>
                <DIV>
                    ${date}
                </DIV>
                <DIV>
                    ${content}
                </DIV>
            </DIV>
        </BODY>
    </HTML>
    `;
    return htmlTemplate ; 
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0 ;
app.get('/counter' , function(req ,res){
   counter = counter + 1 ; 
   res.send(counter.toString()) ;
});


app.get('/:articleName',function(req,res)
{
     var articleName = req.params.articleName ;
     res.send(createTemplate(articles[articleName])) ;
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
