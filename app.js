var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var session = require('express-session')
var bodyParser = require('body-parser')
var mongoStore = require('connect-mongo')(session)

var routes = require('./routes/index')
var settings = require('./settings')
var flash = require('connect-flash')
var multer = require('multer')

var app = express()

app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(flash())

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())
app.use(session({
  secret: settings.cookieSecret,
  key: settings.db,  //cookie name
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},  //30 days
  store: new mongoStore({
    db: settings.db,
    host: settings.host,
    port: settings.port
  })
}))
app.use(multer({
  dest: './public/images',
  rename: function(fieldname, filename){
    return filename
  }
}))

routes(app)

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'))
})


