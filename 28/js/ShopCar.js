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

	sc_msg();
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
						html += "<div id = 'goodsPic'><img src = '" + data[sc_obj[i].id].img + "'></div><div id = 'goodsTitle'><a href =''>荣耀8 4GB+32GB 全网通版（珠光白） 【送TPU保护壳+免费领取30天碎屏险】双镜头/双2.5D玻璃/双功</a></div><div id = 'goodsPrice'>￥2299 x" + sc_obj[i].num + "</div><div id = 'lookCar'><span>共"+sc_obj[i].num+"件商品,金额合计￥2299</span><button>去结算</button><div>"
					}
					$(".center").html(html);
				}
			}
		})
	}

































































































































}






