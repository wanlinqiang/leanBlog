var mongodb = require('./db')

function Comment(name, day, title, comment){
  this.name = name
  this.day = day
  this.title = title
  this.comment = comment
}

module.exports = Comment

//存储一条留言信息
Comment.prototype.save = function(callback){
  var name = this.name,
      day = this.day,
      title = this.title,
      comment = this.comment
  //打开数据库
  
}