const fs = require('fs')
import React from 'react'; //add
import ReactDOMServer from 'react-dom/server'; //add
import Home from '../../src/index'; //add
const User = require('../models/User')

var index = async (ctx,next)=>{
	var name = ctx.params.name;
	const html = ReactDOMServer.renderToString(<Home />);
	ctx.type = "html"
	// ctx.cookies.set('view', "123123123");
	ctx.response.body = fs.createReadStream('build/index.html')

	fs.readFile('build/index.html', 'utf8', function (err, data) {
	    if (err) throw err;
		console.log('---',html)
	    // 把渲染后的 React HTML 插入到 div 中
	    const document = data.replace(/<div id="root"><\/div>/, `<div id="root">${html}</div>`);

	    // 把响应传回给客户端
	    // res.send(document);
		ctx.response.body = document
	  });
}

var login = async (ctx,next)=>{
	let name = ctx.request.body.username || "";
	let pwd = ctx.request.body.password || "";

	let msg = "";
	let status = 0

	console.log('---------',ctx.request.body)
	if(!name){
		msg = "请填写用户名";
		status = 0
	}

	if(!pwd){
		msg = "请填写密码";
		status = 0
	}
	let result = [];

    let users = await User.findAll({
        where: {
            username: name
        }
    });

    result = JSON.stringify(users)

    if(!result.length){
    	msg = "用户不存在"
    	status = 0
    }else{
    	msg = "成功"
    	status = 1
    }

    ctx.response.body = {
    	msg:msg,
    	result:[],
    	status:status
    }
}


module.exports = {
	'GET /': index,
	'GET /login': index,
	'GET /addUser': index,
	'POST /api/login':login
}
