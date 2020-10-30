const expres = require('express');
const exphbs = require('express-handlebars');
const users = require('./users.json')

const app = expres();
app.use(expres.static('public'));





app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({

}));
 
app.get('/', function (req, res) {
    res.render('home', { nameCss: 'main'});
});
app.get('/about', function (req, res) {
    res.render('about', {nameCss: 'about'});
});
app.get('/users', function (req, res) {
    res.render('users', {users, nameCss: 'users', nameCss: 'users'});
});

app.listen(5055);


