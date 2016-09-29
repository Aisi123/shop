function startMove(obj, json, fn){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var bStop = true; //代表所有的值都到达了
			//opacity  filter
			//当前样式
			for(var attr in json){
				var iCur = 0;
				if(attr == "opacity"){
					//取出当前的透明度
					iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
				}else{
					iCur = parseInt(getStyle(obj, attr));
				}

				var iSpeed = (json[attr] - iCur) / 8;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				if(iCur != json[attr]){
					bStop = false;
				}

				if(attr == "opacity"){
					obj.style.filter = "alpha(opacity: " + (iCur + iSpeed) + ")";
					obj.style.opacity = (iCur + iSpeed) / 100;
				}else{
					obj.style[attr] = iCur + iSpeed + "px";
				}
			}
			if(bStop){
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}
		}, 30);
	}

	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj)[attr];
		}
	}


function UniformMove(obj, iSpeed ,json, fn){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var bStop = true; //代表所有的值都到达了
			//opacity  filter
			//当前样式
			for(var attr in json){
				var iCur = 0;
				if(attr == "opacity"){
					//取出当前的透明度
					iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
				}else{
					iCur = parseInt(getStyle(obj, attr));
				}

				if(iCur < json[attr]){
					iSpeed = Math.abs(iSpeed);
				}else{
					iSpeed = Math.abs(iSpeed) * -1;
				}
				if(iCur != json[attr]){
					bStop = false;
				}

				if(attr == "opacity"){
					obj.style.filter = "alpha(opacity: " + (iCur + iSpeed) + ")";
					obj.style.opacity = (iCur + iSpeed) / 100;
				}else{
					obj.style[attr] = iCur + iSpeed + "px";
				}
			}
			if(bStop){
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}
		}, 5);
	}

	





