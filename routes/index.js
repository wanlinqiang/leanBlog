module.exports = function(app){
  //首页
  app.get('/', function(req, res){
    res.render('index', { title: '主页' })
  })

  //注册
  app.get('/reg', function(req, res){
    res.render('reg', { title: '注册' })
  })

  app.post('/reg', function(req, res){})

  //登录
  app.get('/login', function(req, res){
    res.render('login', { title: '登录' })
  })

  app.post('/login', function(req, res){})

  //发表
  app.get('/post', function(req, res){
    res.render('post', { title: '发表' })
  })
  app.post('/post', function(req, res){})
  app.get('logout', function(req, res){})
  
}
