$("#signUp").on("click",function(){
    $("#login-box").addClass('right-panel-active')
})

$("#signIn").on("click",function(){
    $("#login-box").removeClass('right-panel-active')
})

$(".txtb input").on("focus",function(){
    $(this).addClass("focus")
})

$(".txtb input").on("blur",function(){
    if($(this).val() == '')
    $(this).removeClass("focus")
})


/**
 * 验证账号
 */
document.getElementById("username").onblur = function(){
	document.getElementsByTagName('input')[0].blur();     //防止误触两个onblur发生冲突
	var user = document.getElementById('username')
	var username = user.value
	if(username.length=0){
		return false	
	}
	else if (username.length<4 || username.length >10) {
		document.getElementById("imply1").innerHTML = "用户名长度在4-10位"
		document.getElementById("imply1").style.display = "inline"
		document.getElementById("yzuser").style.visibility="hidden"
		return false 
	}
	else {
		var regExp=/^[A-Za-z0-9._-]+$/;
		var result = regExp.test(username) 
		if (result){
			document.getElementById("yzuser").style.visibility="visible"
			document.getElementById("imply1").style.display = "none"
			return true	
		}else {
			document.getElementById("imply1").innerHTML = "用户名只能由数字和字母或点、减号或下划线组成"
			document.getElementById("yzuser").style.visibility="hidden"
			return false
		}
	}
}

/**
 * 验证邮箱
 */

var e=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
let email = document.getElementById("email")
email.onblur = () =>{
	document.getElementsByTagName('input')[1].blur();
    let em = email.value
    if(em==""){
		document.getElementById("yzmail").style.visibility="hidden"
        return false
    }
    if(em !=""){
        if(!(e.test(em)))
        {
		document.getElementById("imply2").innerHTML = "邮箱格式不正确"
		document.getElementById("imply2").style.display = "inline"
		document.getElementById("yzmail").style.visibility="hidden"
        return false
    }else{
		document.getElementById("yzmail").style.visibility="visible"
		document.getElementById("imply2").style.display = "none"
        return true
        }
    }
}

/**
 * 验证密码
 */
let pwd1 =  document.getElementById("pwd1")
pwd1.onblur = function(){
	document.getElementsByTagName('input')[2].blur();
	pd1 = pwd1.value
	if(!pd1){
		document.getElementById("imply3").innerHTML = "请输入密码"
		document.getElementById("imply3").style.display = "inline"
		document.getElementById('yzmm').style.visibility="hidden"
		return false
	}
	else if(pd1.length<6 || pd1.length>30){
		document.getElementById("imply3").innerHTML = "密码长度6~30位"
		document.getElementById("imply3").style.display = "inline"
		document.getElementById('yzmm').style.visibility="hidden"
		return false
	}
	else{
		document.getElementById('yzmm').style.visibility="visible"
		document.getElementById("imply3").style.display = "none"
        return true
	}
}

let pwd2 = document.getElementById("pwd2")
pwd2.onblur = () =>{
	document.getElementsByTagName('input')[3].blur();
	var text1 = document.getElementById("pwd1").value
	var text2 = pwd2.value
	if (!text1 || !text2) return false
	if (text1 == text2){
		document.getElementById("yzmmmm").style.visibility="visible"
		document.getElementById("imply4").style.display = "none"
        return true
	} else {
		document.getElementById("imply4").innerHTML = "两次输入的密码不一致"
		document.getElementById("imply4").style.display = "inline"
		document.getElementById('pwd2').value = ''
		document.getElementById("yzmmmm").style.visibility="hidden"
		return false
	}
}


/**
 * 验证码
 */
//获取随机字符串
var arr = ['1','2','3','4','5','6','7','8','9','0']
var str = ''
function getNum(){
	str = ""
	for(i=0;i<4;i++){
		var num = Math.floor(Math.random()*(9-0)+0)
		str += arr[num]
	}
	return str
}
getNum()
document.getElementById('code').innerHTML = str
//将返回的字符串赋值给验证码的显示
document.getElementById('in').onblur = function go(){
	var code = document.getElementById('code').innerHTML
	//获取用户输入
	var j = document.getElementById('in').value
	//进行校验
	if(code!=j){
		document.getElementById("imply5").innerHTML = "您输入的验证码错误"
		document.getElementById("imply5").style.display = "inline"
		document.getElementById('in').value = ''
        document.getElementById("yanzheng").style.visibility="hidden"
	}else{
		document.getElementById("yanzheng").style.visibility="visible"
		document.getElementById("imply5").style.display = "none"
	}
}
/***
 * 刷线验证码 
 */
var ma = document.getElementById("code")
ma.addEventListener("click", () =>{
	document.getElementById('code').innerHTML = getNum()
	document.getElementById("yanzheng").style.visibility="hidden"
	document.getElementById('in').value = ''
})
