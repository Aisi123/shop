window.onload = function(){
  var oCenter = document.getElementById("center")
  var oUser = document.getElementById("username");
  var oPass = document.getElementById("password");
  var oTest = document.getElementById("test");
  var oCode = document.getElementById("code");
  var oP1 = oCenter.getElementsByTagName("p")[0];
  var oP2 = oCenter.getElementsByTagName("p")[1];
  var oP3 = oCenter.getElementsByTagName("p")[2]
  var oP1span = oP1.getElementsByTagName("span")[0];
  var oP2span = oP2.getElementsByTagName("span")[0];
  var oP3span = oP3.getElementsByTagName("span")[0];
   var oValue = oUser.value.replace(/ /g, "");
   oUser.value = oValue;
  oUser.onfocus = function(){
  		this.placeholder = "";
  		oP1span.style.display = "none";
  }
oUser.onblur = function(){
  	if(oUser.value == ""){
  		oP1span.style.display = "block";
  		oP1span.innerHTML = "请输入用户名";
  		this.style.border = "1px solid #bc0000";
  	}else{
  		//alert(oUser.value.length)
  		if(oUser.value.length > 18 || oUser.value.length < 6){
  			oP1span.style.display = "block";
				oP1span.innerHTML = "用户名的长度为6到18位";
			}else if(oUser.value[0] >= "0" && oUser.value[0] <= "9"){
				oP1span.style.display = "block";
				oP1span.innerHTML = "用户名的首字母不能为数字";
			}
  	}
  }
  oCode.style.color = randomColor();
 oPass.onfocus = function(){
  	this.placeholder = "";
  	
  }
oPass.onblur = function(){
  	this.placeholder = "密码";
  	
  }
 oTest.onfocus = function(){
  	this.placeholder = "";
  //	this.style.border = "1px solid #bc0000"
  }
oTest.onblur = function(){
  	if(this.value == oCode.innerHTML){
  		this.style.border = "1px solid #bcbcbc";
  	}else{
  		oP3span.style.display = "block";
  		oP3span.innerHTML = "验证码错误";
  	}
  }
oCode.innerHTML = testCode(4);
oCode.onclick = function(){
	stopDefault();
	this.innerHTML = testCode(4);
	this.style.border = "none";
}






























































































































































































}