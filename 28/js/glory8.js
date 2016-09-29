window.onload = function(){
	//顶部下拉菜单
	var oUl = document.getElementById('ul1');
	var oLi = oUl.getElementsByTagName('li')[2]
	var oDiv = oLi.getElementsByTagName('div')[0];
	oLi.onmouseover = function(){
		
		var oP = oLi.getElementsByTagName('p')[0];
		oImg = oP.getElementsByTagName('img')[0]
		oImg.src = "../img/homepage/top3.jpg";
		oDiv.style.display = "block"
		//startMove(oDiv,{height:90});
		oDiv.style.zIndex++;
	} 
	oDiv.onmouseout = function(){
		var oDiv = oLi.getElementsByTagName('div')[0];
		var oP = oLi.getElementsByTagName('p')[0];
		oImg = oP.getElementsByTagName('img')[0]
		oImg.src = "../img/homepage/top2.jpg";
		oDiv.style.display = "none"
		//startMove(oDiv,{height:0});

	} 

	var oUl2 = document.getElementById('ul2');
	var oLi2 = oUl2.getElementsByTagName('li')[4];
	var oDiv2 = oLi2.getElementsByTagName('div')[0];
	oLi2.onmouseover = function(){
		
		var oP2 = oLi2.getElementsByTagName('p')[0];
		oImg2 = oP2.getElementsByTagName('img')[0]
		oImg2.src = "../img/homepage/top3.jpg";
		startMove(oDiv2,{height:130});
		oDiv2.style.zIndex++;

	} 
	oLi2.onmouseout = function(){
		
		var oP2 = oLi2.getElementsByTagName('p')[0];
		oImg2 = oP2.getElementsByTagName('img')[0]
		oImg2.src = "../img/homepage/top2.jpg";
		startMove(oDiv2,{height:0});
		oDiv2.style.zIndex++;

	} 
	oDiv2.onmouseout = function(){
		var oDiv2 = oLi2.getElementsByTagName('div')[0];
		var oP2 = oLi2.getElementsByTagName('p')[0];
		oImg2 = oP2.getElementsByTagName('img')[0]
		oImg2.src = "../img/homepage/top2.jpg";
		startMove(oDiv2,{height:0});
	} 
	//头部隐藏菜单
	var headdiv = document.getElementById("header")
	var head_div = document.getElementById("shopCity");
	var oLeft = head_div.getElementsByTagName('div')[0];
	var oRight = head_div.getElementsByTagName('div')[1];
	var oImg3 = oLeft.getElementsByTagName('img')[0];
	var oImg5 = oRight.getElementsByTagName('img')[0];
	var oHead_input = document.getElementById("Head_input");
	var oHeadBtn = headdiv.getElementsByTagName("button")[0];
	oHead_input.onfocus = function(){
		oHead_input.placeholder = "";
	}
	oHead_input.onblur = function(){
		oHead_input.placeholder = "荣耀8";
	}
	oHeadBtn.onmouseover = function(){
		this.style.filter = "alpha(opactiy = 70)";
		this.style.opacity = 0.7;
	}
	oHeadBtn.onmouseout = function(){
		this.style.filter = "alpha(opactiy = 100)";
		this.style.opacity = 1;
	}
	//左侧隐藏DIV
	var oLdiv = document.createElement("div");
		oLeft.appendChild(oLdiv);
		var p1 = document.createElement("p");
		var a1 = document.createElement("a");
		a1.innerHTML= "登录";
		a1.id='a1';
		var a2 = document.createElement("a");
		a2.innerHTML = "注册";
		p1.innerHTML = "<span>你好，请</span>";
		p1.appendChild(a1);
		p1.appendChild(a2);
		oLdiv.appendChild(p1);
		var oLi4 = document.createElement("li");
		var oA1 = createNodeWithText("a","我的订单");
		var oA2 = createNodeWithText("a","待支付");
		oLi4.appendChild(oA1);
		oLi4.appendChild(oA2);
		oLdiv.appendChild(oLi4);
		var oLi5 = document.createElement("li");
		var oA3 = createNodeWithText("a","待评论");
		var oA4 = createNodeWithText("a","优惠券");
		oLi5.appendChild(oA3);
		oLi5.appendChild(oA4);
		oLdiv.appendChild(oLi5);
		var oLi6 = document.createElement("li");
		var oA5 = createNodeWithText("a","站内信");
		oA5.id = "a5";
		oLi6.appendChild(oA5);
		oLi6.id = "L6";
		oLdiv.appendChild(oLi6);
		var oA6 = document.createElement("a");
		oA6.id = "a6";
		oA6.href = "#"
		var oImg4 = document.createElement("img");
		oImg4.src = "../img/homepage/top4.jpg";
		oA6.appendChild(oImg4);
		oLdiv.appendChild(oA6);
		
	oLeft.onmouseover = function(){
		head_div.style.borderBottom = "none";
		oImg3.src = "../img/homepage/arrow2.jpg"
		oRight.style.borderBottom = "1px solid gray";
		oRight.style.borderLeft = "1px solid gray";
		oLdiv.style.display = "block";
		oLdiv.style.zIndex++;
	}
	oLeft.onmouseout = function(){
		head_div.style.borderBottom = "1px solid gray";
		oImg3.src = "../img/homepage/arrow1.jpg"
		oRight.style.borderBottom = "none";
		oRight.style.borderLeft = "none";
		oLdiv.style.display = "none";
	}
	//右侧隐藏的DIV
	var oRdiv = document.createElement("div");
	oRdiv.id = "shoppingcar";
	oRight.appendChild(oRdiv);
	oRight.onmouseover = function(){
		head_div.style.borderBottom = "none";
		oImg5.src = "../img/homepage/arrow2.jpg"
		oLeft.style.borderBottom = "1px solid gray";
		oLeft.style.borderRight = "2px solid gray";
		oRdiv.style.display = "block";
		oRdiv.style.zIndex++;
		sc_msg();
	}
	oRight.onmouseout = function(){
		head_div.style.borderBottom = "1px solid gray";
		oImg5.src = "../img/homepage/arrow1.jpg"
		oLeft.style.borderBottom = "none";
		oLeft.style.borderRight = "none";
		oRdiv.style.display = "none";
	}

	//头部右侧按钮
	var oHeadDiv = document.getElementById("head_right")
	var oHeadBtn1 = oHeadDiv.getElementsByTagName('button')[0]
	var oHeadBtn2 = oHeadDiv.getElementsByTagName('button')[1]
	var oImg6 = oHeadDiv.getElementsByTagName('img')[0];
	var oHeadP = oHeadDiv.getElementsByTagName('p')[0]

	oHeadBtn1.onmouseover = function(){
		this.style.backgroundColor = "#ca141c";
		oImg6.src = "../img/homepage/header_1.png";
		oHeadBtn2.style.backgroundColor= "#888";
		oHeadP.innerHTML = "专享周三荣耀专场";
	}
	oHeadBtn2.onmouseover = function(){
		oHeadBtn1.style.backgroundColor = "#888";
		this.style.backgroundColor = "#ca141c";
		oImg6.src = "../img/homepage/header_2.jpg";
		oHeadP.innerHTML = "微信扫码关注我们";
	}


	
//导航栏
		var oNav_ul = document.getElementById("nav_ul");
	var aNav_last = oNav_ul.getElementsByTagName('li')[8];
	var oNav_last = document.getElementById("Nav_last")
	aNav_last.onmouseover = function(){
		oNav_last.style.display = "block";
		oNav_last.style.zIndex++;
	}
	aNav_last.onmouseout = function(){
		oNav_last.style.display = "none"
	}

	var oNavFirst = document.getElementById("nav_first");
	var oNavLeft = document.getElementById("nav_left");
	var oNavRight = document.getElementById("nav_right");
	ajax("get","../json/glory8/tab.json","",function(data){
		var arr = JSON.parse(data)._data;
		for(var i = 0; i < arr.length;i++){
			var oDL = document.createElement("dl");
			var oDt = document.createElement("dt");
			var oAdt = document.createElement("a");
			oAdt.href = "#";
			oAdt.innerHTML = arr[i].dtt;
			oDt.appendChild(oAdt);
			oDL.appendChild(oDt);
			var oDd = document.createElement("dd");
			oDL.appendChild(oDd);

			for(var j = 0 ; j < arr[i].ddd1.length;j++){
				var oAdd = document.createElement("a");
				oAdd.href = "#";
				oAdd.innerHTML = arr[i].ddd1[j];
				oDd.appendChild(oAdd);
				
			}

			oNavLeft.appendChild(oDL);

			
			oNavRight.onmouseover = function(){
				this.style.display = "block";
			}
			oNavRight.onmouseout = function(){
				this.style.display = "none";
			}
		
			oDL.onmouseout = function(){
				this.style.background = "url(../img/glory8/em.jpg)";
				oNavRight.style.display = "none"
			}
			
		}
		var aBdl = oNavLeft.getElementsByTagName("dl");
		for(var i = 0; i < aBdl.length; i++){
			aBdl[i].index = i;
			aBdl[i].onmouseover = function(){
				oNavRight.innerHTML = "";
				
				this.style.background = "url(../img/glory8/em2.jpg)";
				oNavRight.style.display = "block";
			
				for(var k = 0; k <arr[this.index].next.length;k++){
					var oAnext = document.createElement("a");
					oAnext.href = "#";
						
					oAnext.innerHTML = arr[this.index].next[k];
					oNavRight.appendChild(oAnext);

				}
				for(var l = 0; l <arr[this.index].frameset.length;l++){
					var oAnext = document.createElement("a");
					oAnext.href = "#";
						
					oAnext.innerHTML = arr[this.index].frameset[l];
					oNavRight.appendChild(oAnext);

				}
			}
		}
		oNavFirst.onmouseover = function(){
			this.style.background = "#c81118 url(../img/homepage/navli2.jpg)  no-repeat 200px center";
			oNavLeft.style.display = "block";
		}
		oNavFirst.onmouseout = function(){
			this.style.background = "#c81118 url(../img/homepage/navli1.jpg)  no-repeat 200px center";
			oNavLeft.style.display = "none";
		}

		
	})


/////////////////////////////////////////////////////////////////////////////////////////

//手机购买
$("#phoneshop").hover(function(){
	$("#phoneshop img").css("display","block");
},function(){
	$("#phoneshop img").css("display","none");
})



//按钮样式
 $(".btn8").hover(function(){
 	$(".btn81").css("display","block");
 	$(this).css("background","url(../img/glory8/arrow2.jpg) no-repeat 270px center");
 },function(){
 	$(".btn81").css("display","none");
 	$(this).css("background","url(../img/glory8/arrow1.jpg) no-repeat 270px center");
 });
 $("button").hover(function(){
 	$(this).css("border","1px solid #000")
 },function(){
 	$(this).css("border","1px solid #b2b2b2")
 })
$("#sub,#add,#oder").hover(function(){
	$(this).css("opacity","0.6");
},function(){
	$(this).css("opacity","1");
})
   $("#imglist dl dt").click(function(){
   	  $(this).append("<img src = '../img/glory8/se.jpg' style = 'position:absolute;right:0;bottom:0'/>");
   	  $(".btn1,.btn3,.btn5").append("<img src = '../img/glory8/se.jpg' style = 'position:absolute;right:0;bottom:0'/>");
   	  $(".btn4,.btn7").css("color","#d2c1ca").css("border","1px solid #d2c1ca").attr("disabled","disabled").css("cursor","not-allowed");
   	  $("#imglist dl dt").not($(this)).attr("disabled","disabled")
   })
 $("#product .right .bottom .btn1,.btn2,.btn3,.btn4,.btn5,.btn6,.btn7").click(function(){
   	 // $(this).css("background","url(../img/glory8/se.jpg) no-repeat ")
   	  $(this).append("<img src = '../img/glory8/se.jpg' style = 'position:absolute;right:0;bottom:0'/>")
   })
$("#imglist .dl2 dt").append("<img src = '../img/glory8/se.jpg' style = 'position:absolute;right:0;bottom:0'/>");
$(".btn1,.btn3,.btn5").append("<img src = '../img/glory8/se.jpg' style = 'position:absolute;right:0;bottom:0'/>");
$(".btn4,.btn7").css("color","#d2c1ca").css("border","1px solid #d2c1ca").attr("disabled","disabled").css("cursor","not-allowed")



$("#imglist .dl1 dt").click(function(){
	$(this).append("<img src = '../img/glory8/se.jpg' style = 'position:absolute;right:0;bottom:0'/>");
    $(".btn1,.btn3,.btn5").append("<img src = '../img/glory8/se.jpg' style = 'position:absolute;right:0;bottom:0'/>");
   	$(".brn2,.btn4,.btn6").css("color","#d2c1ca").css("border","1px solid #d2c1ca").attr("disabled","disabled").css("cursor","not-allowed");
  



})
	


//小图轮播
var oDA = document.getElementById("smallbox");
var ODimg = oDA.getElementsByTagName("img")[0];
var oSele = document.getElementById("sele");
var oPLeft = oSele.getElementsByTagName("div")[0];
var oShow = document.getElementById("show");
var oPRight = oSele.getElementsByTagName("div")[2];
var oShowUl = document.createElement("ul");
var iNow = 0;
ajax("get","../json/glory8/img1.json","",function(data){
	var arr = JSON.parse(data)._data;
	for(var i = 0; i < arr.length; i++){
		var oShowLi = document.createElement("li");
		var oShowImg =document.createElement("img");
		var oShowspan = document.createElement("span");
		oShowLi.className = "imgli"
		oShowImg.src = arr[i];
		oShowLi.appendChild(oShowspan);
		oShowLi.appendChild(oShowImg);
		oShowUl.appendChild(oShowLi);
		oShow.appendChild(oShowUl);
	}	
	var oDiv = document.getElementById("product");
	var oWrap = oDiv.getElementsByTagName('div')[0];
	var objDemo = oWrap.getElementsByTagName('div')[0];
	var objSmallBox= document.getElementById("smallbox");
	var objFloatBox= document.getElementById("floatbox");
	var objBigBox = document.getElementById("bigbox");
	var objBigBoxImage = objBigBox.getElementsByTagName('img')[0];
	objSmallBox.onmouseover = function(){
		objFloatBox.style.display = "block";
		objBigBox.style.display = "block";
	}
	objSmallBox.onmouseout= function(){
		objFloatBox.style.display = "none";
		objBigBox.style.display = "none";
	}
	objSmallBox.onmousemove = function(ev){
		var _event = ev;
		var left = _event.clientX - objDemo.offsetLeft - objSmallBox.offsetLeft - objFloatBox.offsetWidth/2;
		var top = _event.clientY - objDemo.offsetTop - objSmallBox.offsetTop - objFloatBox.offsetHeight/2;
		if(left < 0){
			left = 0 ;
		}else if(left > (objSmallBox.offsetWidth - objFloatBox.offsetWidth)){
			left = objSmallBox.offsetWidth - objFloatBox.offsetWidth;
		}
		if(top < 0){
			top = 0; 
		}else if(top > (objSmallBox.offsetHeight - objFloatBox.offsetHeight)){
			top = objSmallBox.offsetHeight - objFloatBox.offsetHeight;
		}
		objFloatBox.style.left = left + "px";
		objFloatBox.style.top = top + "px";
		var percentX = left / (objSmallBox.offsetWidth - objFloatBox.offsetWidth);
		var percentY = top / (objSmallBox.offsetHeight - objFloatBox.offsetHeight);

		objBigBoxImage.style.left = - percentX * (objBigBoxImage.offsetWidth - objBigBox.offsetWidth) + "px";
		objBigBoxImage.style.top = - percentY * (objBigBoxImage.offsetHeight - objBigBox.offsetHeight) + "px";
	}
		$(".imgli").mouseover(function(){
			ODimg.src = "../img/glory8/D"+($(this).index() +1)+".jpg";
			objBigBoxImage.src =  "../img/glory8/DD"+($(this).index() +2)+".jpg";
		})
	
		$('#sele').find('.left').click(function(){

			$('#show').find('ul').animate({left: (parseInt($("#show").find("ul").css("left")) - 90)+ "px"});
		});
		$('#sele').find('.right').click(function(){
		if(parseInt($("#show").find("ul").css("left")) >= 0){
			
		}else{
			$('#show').find('ul').animate({left: (parseInt($("#show").find("ul").css("left")) + 90)+ "px"});
		}
		});

})

//数量增加/减少
     	$("#add").click(function(){
	     	$("#num").val(parseInt($("#num").val()) + 1)
	     	})
     	$("#sub").click(function(){
     		if($("#num").val() > 1){
     			$("#num").val(parseInt($("#num").val()) - 1);

	     	}
     		})
	     	
 //点击加入购物车
var oBtom = document.getElementsByClassName("bottom")[0];
var oAddShopCar = document.getElementById("addShopCar");
var oShopDiv = document.createElement("div");
	oShopDiv.className = "sup";
	
	var oShopDiv1 = document.createElement("div")
	oShopDiv1.className = "sub";
	oShopDiv.appendChild(oShopDiv1);
	var oSSImg = document.createElement("img");
	oSSImg.src = "../img/glory8/ss.jpg";
	oShopDiv1.appendChild(oSSImg);
	var oH6 = document.createElement("h6");
	
	var oH2 = document.createElement("h2");
	oH2.innerHTML = "荣耀8";
	oH6.innerHTML = "成功加入购物车";
	var oH5 = document.createElement("h5");
	var oSpan1 = document.createElement("span");
	var oSpan2 = document.createElement("span");
	oSpan1.innerHTML = "1";
	oSpan2.innerHTML = "￥2299";
	oH5.appendChild(oSpan1);
	oH5.appendChild(oSpan2);
	oH5.innerHTML = "购物车总共"+   oSpan1.innerHTML  +"件商品,金额合计"+   oSpan2.innerHTML;
	var oBtn1 = document.createElement("button");
	oBtn1.innerHTML = "去结算";
	oBtn1.id = "shopcity";
	var oBtn2 = document.createElement("button");
	oBtn2.innerHTML = "继续逛逛>>"
	oBtn2.id = "back";
	var oBtn3 = document.createElement("button");
	oBtn3.id = "cancel";
	oBtn3.innerHTML = "X";
	oShopDiv1.appendChild(oBtn1);
	oShopDiv1.appendChild(oBtn2);
	oShopDiv1.appendChild(oH6);
	oShopDiv1.appendChild(oH2);
	oShopDiv1.appendChild(oH5);
	oShopDiv1.appendChild(oBtn3);
	oBtom.appendChild(oShopDiv);
oAddShopCar.onclick = function(){
	oShopDiv.style.display = "block";
}
oBtn3.onclick = function(){
	oShopDiv.style.display = "none";
}

$("#addShopCar").on("click", function(){
		var id = 0;
		var first = $.cookie("goods") == null ? true : false;
		if(first){
			$.cookie("goods", "[{id:" + id + ",num:1}]");
			$.cookie("first", "false");
		}else{
			var str = $.cookie("goods");
			var arr = eval(str);
			for(var i in arr){
				if(arr[i].id == id){
					arr[i].num = arr[i].num + 1;
					var cookieStr = JSON.stringify(arr);
					$.cookie("goods", cookieStr);
				}
			}
		}
		sc_car();
	});

	function sc_car(){
		var sc_str = $.cookie("goods");
		if(sc_str){
			var sc_obj = eval(sc_str);
			var sc_num = 0;
			for(var i in sc_obj){
				sc_num += Number(sc_obj[i].num);
			}
		}
	}

	function sc_msg(){
		$.ajax({
			url:"../js/shopCar.json",
			type:"GET",
			success:function(data){
				var sc_str = $.cookie("goods");
				if(sc_str){
					var sc_obj = eval(sc_str);
					var html = "";
					for(var i in sc_obj){
						html += "<div id = 'goodsPic'><img src = '" + data[sc_obj[i].id].img + "'></div><div id = 'goodsTitle'><a href =''>荣耀8 4GB+32GB 全网通版（珠光白） 【送TPU保护壳+免费领取30天碎屏险】双镜头/双2.5D玻璃/双功</a></div><div id = 'goodsPrice'>￥2299 x" + sc_obj[i].num + "</div><div id = 'lookCar'><span>共"+sc_obj[i].num+"件商品,金额合计￥2299</span><button id ='count'><a href='../html/ShopCar.html'>去结算</a></button><div>"
					}
					$("#shoppingcar").html(html);
				}
			}
		})
	}

$("#count").click(function(){

})























































































































































}
