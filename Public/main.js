app.controller("loginController",function(e){e.title="北京八维研修学院",e.flag=!1,e.readme=!1,e.userinfo={username:"haonan",password:"123456",address:"山西省偏关县",phonenumber:"13031061118",hoby:["吃饭","睡觉","打豆豆"]},e.suggestion=[{name:"多吃饭",checked:!1},{name:"多喝水",checked:!1},{name:"多吃肉",checked:!1}],e.checkall=function(){var n=[];e.suggestion.forEach(function(e){1==e.checked&&n.push(e)}),n.length==e.suggestion.length?e.flag=!0:e.flag=!1},e.getuser=function(){console.log(e.userinfo.username),console.log(e.userinfo.password)}}),app.controller("loginController",function(e){e.title="北京八维研修学院",e.flag=!1,e.readme=!1,e.userinfo={username:"haonan",password:"123456",address:"山西省偏关县",phonenumber:"13031061118",hoby:["吃饭","睡觉","打豆豆"]},e.suggestion=[{name:"多吃饭",checked:!1},{name:"多喝水",checked:!1},{name:"多吃肉",checked:!1}],e.checkall=function(){var n=[];e.suggestion.forEach(function(e){1==e.checked&&n.push(e)}),n.length==e.suggestion.length?e.flag=!0:e.flag=!1},e.getuser=function(){console.log(e.userinfo.username),console.log(e.userinfo.password)}}),app.controller("registryController",function(e){e.title="registry",e.menulist=[{title:"全职工作",icons:"iconfont icon-home"},{title:"全职工作",icons:"iconfont icon-home"},{title:"全职工作",icons:"iconfont icon-home"},{title:"全职工作",icons:"iconfont icon-home"}]}),app.controller("userInfoController",function(e){e.title="用户信息一览表",e.time=new Date,e.userinfo=[{userid:"1",username:"志明与春娇",gender:"20",address:"@region",cellphone:"@integer(10000000000,19999999999)",email:"@email"},{userid:"3",username:"春娇与志明",gender:"25",address:"@region",cellphone:"@integer(10000000000,19999999999)",email:"@email"},{userid:"2",username:"春娇救志明",gender:"30",address:"@region",cellphone:"@integer(10000000000,19999999999)",email:"@email"}],e.search,e.activeation=function(){e.search}}),app.controller("registryController",function(e){e.title="registry",e.menulist=[{title:"全职工作",icons:"iconfont icon-home"},{title:"全职工作",icons:"iconfont icon-home"},{title:"全职工作",icons:"iconfont icon-home"},{title:"全职工作",icons:"iconfont icon-home"}]}),app.controller("userInfoController",function(e){e.title="用户信息一览表",e.time=new Date,e.userinfo=[{userid:"1",username:"志明与春娇",gender:"20",address:"@region",cellphone:"@integer(10000000000,19999999999)",email:"@email"},{userid:"3",username:"春娇与志明",gender:"25",address:"@region",cellphone:"@integer(10000000000,19999999999)",email:"@email"},{userid:"2",username:"春娇救志明",gender:"30",address:"@region",cellphone:"@integer(10000000000,19999999999)",email:"@email"}],e.search,e.activeation=function(){e.search}});