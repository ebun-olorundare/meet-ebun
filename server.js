//install express server
var express = require('express');
//initialize express app
var app = express();



//storing package installed to use express handlebars & setting default layout template
var handlebars = require('express-handlebars')
    .create({ defaultLayout: 'main' });

//creating engine to use handlebars tempate engine
app.engine('handlebars', handlebars.engine);
//setting the view engine to look for files ending with handlebars
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static('public'));

//Routes
//render specified template page 

//routes to home page 
app.get('/', function (req, res) {
    res.render('home', {
        title: 'Home'
    });
});

//routes to home page
app.get('/home', function (req, res) {
    res.render('home', {
        title: 'Home'
    });
});

app.get('/about', function (req, res) {
    res.render('about', {
        title: 'About Ebun'
    });
});

app.get('/contact', function (req, res) {
    res.render('contact', {
        title: 'Contact Me'
    });
});

app.get('/projects', function (req, res) {
    res.render('projects', {
        title: 'Projects'
    });
});
//custom 404 page
app.use(function (req, res) {
    res.status(404);
    res.render('notfound', {
        title: 'Page Not Found'
    });
});


// custom 500 page
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500', {
        title: 'Server Error-'
    });
});

//starting server on port 3000
app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

