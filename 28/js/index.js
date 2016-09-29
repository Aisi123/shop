window.onload = function(){
	//顶部下拉菜单
	var oUl = document.getElementById('ul1');
	var oLi = oUl.getElementsByTagName('li')[2]
	var oDiv = oLi.getElementsByTagName('div')[0];
	oLi.onmouseover = function(){
		
		var oP = oLi.getElementsByTagName('p')[0];
		oImg = oP.getElementsByTagName('img')[0]
		oImg.src = "img/homepage/top3.jpg";
		startMove(oDiv,{height:90});
		oDiv.style.zIndex++;
	} 
	oLi.onmouseout = function(){
		
		var oP = oLi.getElementsByTagName('p')[0];
		oImg = oP.getElementsByTagName('img')[0]
		oImg.src = "img/homepage/top2.jpg";
		startMove(oDiv,{height:0});
		oDiv.style.zIndex++;
	} 
	oDiv.onmouseout = function(){
		var oDiv = oLi.getElementsByTagName('div')[0];
		var oP = oLi.getElementsByTagName('p')[0];
		oImg = oP.getElementsByTagName('img')[0]
		oImg.src = "img/homepage/top2.jpg";
		startMove(oDiv,{height:0});

	} 

	var oUl2 = document.getElementById('ul2');
	var oLi2 = oUl2.getElementsByTagName('li')[4];
	var oDiv2 = oLi2.getElementsByTagName('div')[0];
	oLi2.onmouseover = function(){
		
		var oP2 = oLi2.getElementsByTagName('p')[0];
		oImg2 = oP2.getElementsByTagName('img')[0]
		oImg2.src = "img/homepage/top3.jpg";
		startMove(oDiv2,{height:130});
		oDiv2.style.zIndex++;

	} 
	oLi2.onmouseout = function(){
		
		var oP2 = oLi2.getElementsByTagName('p')[0];
		oImg2 = oP2.getElementsByTagName('img')[0]
		oImg2.src = "img/homepage/top2.jpg";
		startMove(oDiv2,{height:0});
		oDiv2.style.zIndex++;

	} 
	oDiv2.onmouseout = function(){
		var oDiv2 = oLi2.getElementsByTagName('div')[0];
		var oP2 = oLi2.getElementsByTagName('p')[0];
		oImg2 = oP2.getElementsByTagName('img')[0]
		oImg2.src = "img/homepage/top2.jpg";
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
	var ODDiv = document.getElementById("shopCity")
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
		oImg4.src = "img/homepage/top4.jpg";
		oA6.appendChild(oImg4);
		oLdiv.appendChild(oA6);
		
	oLeft.onmouseover = function(){
		head_div.style.borderBottom = "none";
		oImg3.src = "img/homepage/arrow2.jpg"
		oRight.style.borderBottom = "1px solid gray";
		oRight.style.borderLeft = "1px solid gray";
		oLdiv.style.display = "block";
		oRight.style.zIndex++;
		oLdiv.style.zIndex++;
	}
	oLeft.onmouseout = function(){
		head_div.style.borderBottom = "1px solid gray";
		oImg3.src = "img/homepage/arrow1.jpg"
		oRight.style.borderBottom = "none";
		oRight.style.borderLeft = "none";
		oLdiv.style.display = "none";
	}
	//右侧隐藏的DIV
	var oRdiv = document.createElement("div");
	oRight.appendChild(oRdiv)
	oRight.onmouseover = function(){
		head_div.style.borderBottom = "none";
		oImg5.src = "img/homepage/arrow2.jpg"
		oLeft.style.borderBottom = "1px solid gray";
		oLeft.style.borderRight = "1px solid gray";
		oRdiv.style.display = "block";
		oRdiv.style.zIndex++;
		oLeft.style.zIndex++;
		ODDiv.style.background = "none";

	}
	oRight.onmouseout = function(){
		head_div.style.borderBottom = "1px solid gray";
		oImg5.src = "img/homepage/arrow1.jpg"
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
		oImg6.src = "img/homepage/header_1.png";
		oHeadBtn2.style.backgroundColor= "#888";
		oHeadP.innerHTML = "专享周三荣耀专场";
	}
	oHeadBtn2.onmouseover = function(){
		oHeadBtn1.style.backgroundColor = "#888";
		this.style.backgroundColor = "#ca141c";
		oImg6.src = "img/homepage/header_2.jpg";
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
//广告栏 
	var oBanLeft = document.getElementById("ban_leftmenu");
	var oBanRight = document.getElementById("ban_rightmenu");
	ajax("get","json/homepage/tabSwitch.json","",function(data){
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
			oBanLeft.appendChild(oDL);

			
			oBanRight.onmouseover = function(){
				this.style.display = "block";
			}
			oBanRight.onmouseout = function(){
				this.style.display = "none";
			}
		
			oDL.onmouseout = function(){
				this.style.backgroundColor = "#fff";
				oBanRight.style.display = "none"
			}
			
		}
		var aBdl = oBanLeft.getElementsByTagName("dl");
		for(var i = 0; i < aBdl.length; i++){
			aBdl[i].index = i;
			aBdl[i].onmouseover = function(){
				oBanRight.innerHTML = "";
				
				this.style.backgroundColor = "#fdefee";
				oBanRight.style.display = "block";
			
				for(var k = 0; k <arr[this.index].next.length;k++){
					var oAnext = document.createElement("a");
					oAnext.href = "#";
						
					oAnext.innerHTML = arr[this.index].next[k];
					oBanRight.appendChild(oAnext);

				}
				for(var l = 0; l <arr[this.index].frameset.length;l++){
					var oAnext = document.createElement("a");
					oAnext.href = "#";
						
					oAnext.innerHTML = arr[this.index].frameset[l];
					oBanRight.appendChild(oAnext);

				}
			}
		}



		
	})
//轮播图
	var oBanImg = document.getElementById("ban_img");
	var oBan_Ul = oBanImg.getElementsByTagName("ul")[0];
	var aBan_li = oBan_Ul.getElementsByTagName("li");
	var aBan_img = oBan_Ul.getElementsByTagName("img");
	var oBan_Btn = document.getElementById("ban_btn");
	var aBana = oBan_Btn.getElementsByTagName("a");
	var imgWidth = 1920;
	var iNow = 0;
	var iNow2 = 0;
	oBan_Ul.style.width = aBan_img.length*imgWidth*2+"px";
	oBan_Ul.innerHTML += oBan_Ul.innerHTML;
	function toReSize(){
		var veiwWidth = document.documentElement.clientWidth;
		if(veiwWidth > 1000){
			for(var i = 0;i < aBan_img.length;i++){
				aBan_img[i].style.left = -(imgWidth - veiwWidth)/2 + "px";
			}
		}
		for(var i = 0; i < aBana.length;i++){
			aBana[i].index = i;
			aBana[i].onmouseover = function(){
				for(var i = 0; i < aBana.length;i++){
					aBana[i].className = "";
				}
				this.className = "active";
				startMove(oBan_Ul,{left:-this.index*imgWidth});
			}
		}

	}
	setInterval(toRun,5000);
	function toRun (){
		if(iNow == 9){
			
			iNow =0;
		}else{
			iNow++;	
		}
		iNow2++;
		for(var i = 0; i < aBana.length;i++){
					aBana[i].className = "";
				}
		aBana[iNow].className = "active";
		if(oBan_Ul.offsetLeft <= - oBan_Ul.offsetWidth/2){
			oBan_Ul.style.left = 0;
		}else if(oBan_Ul.offsetLeft >= 0){
			oBan_Ul.style.left = -oBan_Ul.offsetWidth/2
		}
		startMove(oBan_Ul,{left:oBan_Ul.offsetLeft-imgWidth})
	}
	toReSize();
	window.onresize = function(){
		toReSize();
	}
//第一个热卖右侧广告
	var oHot1 = document.getElementById("Hot1");
	var oHot1Right = document.getElementById("Hot1_right");
	var oHot1Rcen = oHot1Right.getElementsByClassName("center")[0];
	var aHot1RBtn = oHot1Rcen.getElementsByTagName("button");
	var aHot1RDiv = oHot1Rcen.getElementsByTagName("div");
	for(var i = 0 ; i < aHot1RBtn.length;i++){
		aHot1RBtn[i].index = i;
		aHot1RBtn[i].onmouseover = function(){
			for(var j = 0 ; j < aHot1RBtn.length;j++){
				aHot1RBtn[j].className = "";
				aHot1RDiv[j].style.display = "none";
			}
			this.className = "active";
			aHot1RDiv[this.index].style.display = "block";
		}
	}

//第一个热卖左侧产品
 var oHot1Left = document.getElementById("Hot1_left");
 var aHot1DL = oHot1Left.getElementsByTagName("dl");
 	ajax("get","json/homepage/hot1.json","",function(data){
		var arr = JSON.parse(data)._data;
 		for(var i = 0; i < aHot1DL.length;i++){
 			var oHotDt = document.createElement("dt");
 			var oHot1Img = document.createElement("img");
 			oHot1Img.src = arr[i].img;
 			oHotDt.appendChild(oHot1Img);
 			aHot1DL[i].appendChild(oHotDt);
 			var oHotDd = document.createElement("dd");
 			var oHotH2 = document.createElement("h2");
 			oHotH2.innerHTML = arr[i].title;
 			var oHotH2A = document.createElement("a");
 			oHotH2A.src = "#";
 			oHotH2A.appendChild(oHotH2);
 			oHotDd.appendChild(oHotH2A);
 			aHot1DL[i].appendChild(oHotDd);
 			var oHotp1 = document.createElement("p");
 			oHotp1.innerHTML = arr[i].des;
 			oHotDd.appendChild(oHotp1);
 			var oHotspan = document.createElement("span");
 			oHotspan.innerHTML = arr[i].favorable;
 			oHotDd.appendChild(oHotspan);
 			var oHotH3 = document.createElement("h3");
 			oHotH3.innerHTML = arr[i].price;
 			oHotDd.appendChild(oHotH3);

 			aHot1DL[i].onmouseover = function(){
 				this.style.border = "3px solid #ddb4ae"
 			}
 			aHot1DL[i].onmouseout = function(){
 				this.style.border = "3px solid #fff"
 			};

 		};

 	});
 //工具栏
var oTool = document.getElementById("tool");
var aToolA = oTool.getElementsByTagName("a");
for(var i = 0 ; i < aToolA.length;i++){
	aToolA[i].onmouseover = function(){
		this.style.backgroundColor = "#555151";
	}
	aToolA[i].onmouseout = function(){
		this.style.background = "";
	}
}



 //广告图
 var oBaniMg = document.getElementById("Ban_img");
 var oBanul  = oBaniMg.getElementsByTagName("ul")[0];
 var aBanlis = oBanul.getElementsByTagName("li")
 var aBan_Imgs = oBanul.getElementsByTagName("img");
 var oBanBtn = document.getElementById("Ban_btn");
 var aBanAs = oBanBtn.getElementsByTagName("a");
 	var imgWidth1 = 1200;
 	var iNow3 = 0;
 	var iNow4 = 0;
 	oBanul.style.width  = aBan_Imgs.length * imgWidth1*2 + "px";
 	oBanul.innerHTML += oBanul.innerHTML;
 	for(var i = 0; i < aBanAs.length;i++){
 		aBanAs[i].index = i;
 		aBanAs[i].onmouseover = function(){
 			clearInterval(timer);
 			for(var i = 0; i < aBanAs.length;i++){
 				aBanAs[i].className = "";
 			}
 			this.className = "active";
 			startMove(oBanul,{left:-this.index*imgWidth1});
 		}

 	}

 	 var timer = setInterval(toRun1,5000);
 	function toRun1(){
 		if(iNow3 == 5){
 			iNow3 =0;
 		}else{
 			iNow3++;
 		}
 		iNow4++;
 		for(var i = 0; i < aBanAs.length;i++){
 			aBanAs[i].className = "";
 		}
 		aBanAs[iNow3].className = "active";
 		if(oBanul.offsetLeft <= -oBanul.offsetWidth/2){
 			oBanul.style.left = 0;
 		}else if(oBanul.offsetLeft >= 0){
 			oBanul.style.left = -oBanul.offsetWidth/2
 		}
 		startMove(oBanul,{left:oBanul.offsetLeft-imgWidth1})
 	}
//floow栏
		var oFloow = document.getElementById("floow");
		var oFlast = oFloow.getElementsByTagName("li")[3];
		var oFlImg = oFloow.getElementsByTagName("li")[4];
		oFlast.onmouseover = function(){
			oFlImg.style.display = "block";

		}
		oFlast.onmouseout = function(){
			setTimeout(function(){
				oFlImg.style.display = "none";
			},3000)
		}
		
//phone栏
var oPhoneDiv = document.getElementById("phone_imglist");
var oPhoneUl= oPhoneDiv.getElementsByTagName("ul")[0];
var aPhoneLis = oPhoneUl.getElementsByTagName("li");
   ajax("get","json/homepage/phone.json","",function(data){
		var arr = JSON.parse(data)._data; 
		for(var i = 0; i < aPhoneLis.length;i++){
			var oPhoneDt = document.createElement("div");
			oPhoneDt.className = "phonedtiv";
			var oPhoneImg = document.createElement("img");
			oPhoneImg.src = arr[i].dtphone;
			oPhoneDt.appendChild(oPhoneImg);
			oPhoneImg.onmouseover = function(){
				startMove(this,{width:226,height:226})
			}
			oPhoneImg.onmouseout = function(){
				startMove(this,{width:222,height:222})
			}
			aPhoneLis[i].appendChild(oPhoneDt);
			var oPhoneDd = document.createElement("div");
			oPhoneDd.className = "phoneddiv";
			var oPhoneSpan = document.createElement("span");
			oPhoneSpan.innerHTML = arr[i].des;
			var oPhoneEm = document.createElement("em");
			oPhoneEm.innerHTML = arr[i].favorable;
			var oPhoneA = document.createElement("a");
			oPhoneA.href = arr[i].a;
			oPhoneA.appendChild(oPhoneSpan);
			oPhoneA.appendChild(oPhoneEm);
			oPhoneDd.appendChild(oPhoneA);
			var oPhoneH3 = document.createElement("h3");
			oPhoneH3.innerHTML = arr[i].price;
			oPhoneDd.appendChild(oPhoneH3);
			aPhoneLis[i].appendChild(oPhoneDd);

			aPhoneLis[i].onmouseover = function(){
				this.style.border = "2px solid #ffaa5f"
			}
			aPhoneLis[i].onmouseout = function(){
				this.style.border = "2px solid #fff"
			}


		}

})

////////////////////////////////////////////pad栏//////////////////////////////////////////////////////////
var oPadDiv = document.getElementById("pad_imglist");
var oPadUl= oPadDiv.getElementsByTagName("ul")[0];
var aPadLis = oPadUl.getElementsByTagName("li");
   ajax("get","json/homepage/Pad.json","",function(data){
		var arr = JSON.parse(data)._data; 
		for(var i = 0; i < aPadLis.length;i++){
			var oPadDt = document.createElement("div");
			oPadDt.className = "Paddtiv";
			var oPadImg = document.createElement("img");
			oPadImg.src = arr[i].dt;
			oPadDt.appendChild(oPadImg);
			oPadImg.onmouseover = function(){
				startMove(this,{width:226,height:226})
			}
			oPadImg.onmouseout = function(){
				startMove(this,{width:222,height:222})
			}
			aPadLis[i].appendChild(oPadDt);
			var oPadDd = document.createElement("div");
			oPadDd.className = "Padddiv";
			var oPadSpan = document.createElement("span");
			oPadSpan.innerHTML = arr[i].des;
			var oPadEm = document.createElement("em");
			oPadEm.innerHTML = arr[i].favorable;
			var oPadA = document.createElement("a");
			oPadA.href = arr[i].a;
			oPadA.appendChild(oPadSpan);
			oPadA.appendChild(oPadEm);
			oPadDd.appendChild(oPadA);
			var oPadH3 = document.createElement("h3");
			oPadH3.innerHTML = arr[i].price;
			oPadDd.appendChild(oPadH3);
			aPadLis[i].appendChild(oPadDd);
		 
			aPadLis[i].onmouseover = function(){
				this.style.border = "2px solid #ffaa5f"
			}
			aPadLis[i].onmouseout = function(){
				this.style.border = "2px solid #fff"
			}


		}

})

////////////////////////////////////////////笔记本栏//////////////////////////////////////////////////////////
var oLaptopDiv = document.getElementById("laptop_imglist");
var oLaptopUl= oLaptopDiv.getElementsByTagName("ul")[0];
var aLaptopLis = oLaptopUl.getElementsByTagName("li");
   ajax("get","json/homepage/Laptop.json","",function(data){
		var arr = JSON.parse(data)._data; 
		for(var i = 0; i < aLaptopLis.length;i++){
			var oLaptopDt = document.createElement("div");
			oLaptopDt.className = "Laptopdtiv";
			var oLaptopImg = document.createElement("img");
			oLaptopImg.src = arr[i].dt;
			oLaptopDt.appendChild(oLaptopImg);
			oLaptopImg.onmouseover = function(){
				startMove(this,{width:226,height:226})
			}
			oLaptopImg.onmouseout = function(){
				startMove(this,{width:222,height:222})
			}
			aLaptopLis[i].appendChild(oLaptopDt);
			var oLaptopDd = document.createElement("div");
			oLaptopDd.className = "Laptopddiv";
			var oLaptopSpan = document.createElement("span");
			oLaptopSpan.innerHTML = arr[i].des;
			var oLaptopEm = document.createElement("em");
			oLaptopEm.innerHTML = arr[i].favorable;
			var oLaptopA = document.createElement("a");
			oLaptopA.href = arr[i].a;
			oLaptopA.appendChild(oLaptopSpan);
			oLaptopA.appendChild(oLaptopEm);
			oLaptopDd.appendChild(oLaptopA);
			var oLaptopH3 = document.createElement("h3");
			oLaptopH3.innerHTML = arr[i].price;
			oLaptopDd.appendChild(oLaptopH3);
			aLaptopLis[i].appendChild(oLaptopDd);
		 
			aLaptopLis[i].onmouseover = function(){
				this.style.border = "2px solid #ffaa5f"
			}
			aLaptopLis[i].onmouseout = function(){
				this.style.border = "2px solid #fff"
			}


		}

})

////////////////////////////////////////////智能家居栏//////////////////////////////////////////////////////////
var oFurnDiv = document.getElementById("furn_imglist");
var oFurnUl= oFurnDiv.getElementsByTagName("ul")[0];
var aFurnLis = oFurnUl.getElementsByTagName("li");
   ajax("get","json/homepage/Furn.json","",function(data){
		var arr = JSON.parse(data)._data; 
		for(var i = 0; i < aFurnLis.length;i++){
			var oFurnDt = document.createElement("div");
			oFurnDt.className = "Furndtiv";
			var oFurnImg = document.createElement("img");
			oFurnImg.src = arr[i].dt;
			oFurnDt.appendChild(oFurnImg);
			oFurnImg.onmouseover = function(){
				startMove(this,{width:226,height:226})
			}
			oFurnImg.onmouseout = function(){
				startMove(this,{width:222,height:222})
			}
			aFurnLis[i].appendChild(oFurnDt);
			var oFurnDd = document.createElement("div");
			oFurnDd.className = "Furnddiv";
			var oFurnSpan = document.createElement("span");
			oFurnSpan.innerHTML = arr[i].des;
			var oFurnEm = document.createElement("em");
			oFurnEm.innerHTML = arr[i].favorable;
			var oFurnA = document.createElement("a");
			oFurnA.href = arr[i].a;
			oFurnA.appendChild(oFurnSpan);
			oFurnA.appendChild(oFurnEm);
			oFurnDd.appendChild(oFurnA);
			var oFurnH3 = document.createElement("h3");
			oFurnH3.innerHTML = arr[i].price;
			oFurnDd.appendChild(oFurnH3);
			aFurnLis[i].appendChild(oFurnDd);
		 
			aFurnLis[i].onmouseover = function(){
				this.style.border = "2px solid #ffaa5f"
			}
			aFurnLis[i].onmouseout = function(){
				this.style.border = "2px solid #fff"
			}


		}

})

////////////////////////////////////////////专属配件栏//////////////////////////////////////////////////////////

var oAccDiv = document.getElementById("acc_imglist");
var oAccUl= oAccDiv.getElementsByTagName("ul")[0];
var aAccLis = oAccUl.getElementsByTagName("li");
   ajax("get","json/homepage/Acc.json","",function(data){
		var arr = JSON.parse(data)._data; 
		for(var i = 0; i < aAccLis.length;i++){
			var oAccDt = document.createElement("div");
			oAccDt.className = "Accdtiv";
			var oAccImg = document.createElement("img");
			oAccImg.src = arr[i].dt;
			oAccDt.appendChild(oAccImg);
			oAccImg.onmouseover = function(){
				startMove(this,{width:226,height:226})
			}
			oAccImg.onmouseout = function(){
				startMove(this,{width:222,height:222})
			}
			aAccLis[i].appendChild(oAccDt);
			var oAccDd = document.createElement("div");
			oAccDd.className = "Accddiv";
			var oAccSpan = document.createElement("span");
			oAccSpan.innerHTML = arr[i].des;
			var oAccEm = document.createElement("em");
			oAccEm.innerHTML = arr[i].favorable;
			var oAccA = document.createElement("a");
			oAccA.href = arr[i].a;
			oAccA.appendChild(oAccSpan);
			oAccA.appendChild(oAccEm);
			oAccDd.appendChild(oAccA);
			var oAccH3 = document.createElement("h3");
			oAccH3.innerHTML = arr[i].price;
			oAccDd.appendChild(oAccH3);
			aAccLis[i].appendChild(oAccDd);

			aAccLis[i].onmouseover = function(){
				this.style.border = "2px solid #ffaa5f"
			}
			aAccLis[i].onmouseout = function(){
				this.style.border = "2px solid #fff"
			}


		}

})


////////////////////////////////////////////每日特价栏sal//////////////////////////////////////////////////////////

var oSalDiv = document.getElementById("sal_imglist");
var oSalUl= oSalDiv.getElementsByTagName("ul")[0];
var aSalLis = oSalUl.getElementsByTagName("li");
   ajax("get","json/homepage/Sal.json","",function(data){
		var arr = JSON.parse(data)._data; 
		for(var i = 0; i < aSalLis.length;i++){
			var oSalDt = document.createElement("div");
			oSalDt.className = "Saldtiv";
			var oSalImg = document.createElement("img");
			oSalImg.src = arr[i].dt;
			oSalDt.appendChild(oSalImg);
			oSalImg.onmouseover = function(){
				startMove(this,{width:226,height:226})
			}
			oSalImg.onmouseout = function(){
				startMove(this,{width:222,height:222})
			}
			aSalLis[i].appendChild(oSalDt);
			var oSalDd = document.createElement("div");
			oSalDd.className = "Salddiv";
			var oSalSpan = document.createElement("span");
			oSalSpan.innerHTML = arr[i].des;
			var oSalEm = document.createElement("em");
			oSalEm.innerHTML = arr[i].favorable;
			var oSalA = document.createElement("a");
			oSalA.href = arr[i].a;
			oSalA.appendChild(oSalSpan);
			oSalA.appendChild(oSalEm);
			oSalDd.appendChild(oSalA);
			var oSalH3 = document.createElement("h3");
			oSalH3.innerHTML = arr[i].price;
			oSalDd.appendChild(oSalH3);
			aSalLis[i].appendChild(oSalDd);
		 
			aSalLis[i].onmouseover = function(){
				this.style.border = "2px solid #ffaa5f"
			}
			aSalLis[i].onmouseout = function(){
				this.style.border = "2px solid #fff"
			}


		}

})





















}

