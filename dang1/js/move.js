/*var lunz=document.getElementById("lun_left")
var luny=document.getElementById("lun_right")
var banner_top=document.getElementById("banner_top")
function fn(e,wei,bian){
	clearInterval(e.timer)
		if(wei==="left"){
		e.timer=setInterval(function(){
		e.style.left=e.offsetLeft-4+"px";
		if(e.offsetLeft<=bian){
			e.style.left=bian+"px";
			clearInterval(e.timer)
		}
	},30)
		}else if(wei==="right"){
		e.timer=setInterval(function(){
		e.style.left=e.offsetLeft+4+"px";
		if(e.offsetLeft>=bian){
			e.style.left=bian+"px";
			clearInterval(e.timer)
		}
	},30)
		}
	
	}
	
	banner_top.onmouseover=function(){
		lunz.style.zIndex=0;
		luny.style.zIndex=0;
			fn(lunz,"rigth",-46)
			fn(luny,"left",763)
		}
	banner_top.onmouseout=function(){
		lunz.style.zIndex=-22;
		luny.style.zIndex=-22;
			fn(lunz,"left",0)
			fn(luny,"right",800)
		}*/


轮播图封装函数
 //  	$("#tu_shu li").click(function(){
 //  		var sz=$(this).index()
 //  		console.log(sz)
 //  		$("#shu_pic").stop().animate({left:-335*sz},500)
 //  		$("#tu_shu li").eq(sz).css("background","#5e5e5e").siblings().css("background","#fff")
 //  		nums=$(this).index()
 //  	})
 //  	var nums=0;
 //  	$(".tushu1").click(function(){
 //  		nums--;
  		
 //  		if(nums==-1){
  			
 //  			nums=2;
 //  			$("#shu_pic").css("left","-1005px")
 //  		}

 //  		$("#shu_pic").stop().animate({left:-335*nums},500)
 //  		$("#tu_shu li").eq(nums).css("background","#5e5e5e").siblings().css("background","#fff")

 //  	})

 //  	$(".tushu2").click(function(){
 //  		han()

 //  	})
 //    var timer_shu=null;
 //  	timer_shu=setInterval(function(){
	// 	han()
	// },5000)

	// $("#shu_pic").mouseenter(function(){
	// 	clearInterval(timer_shu)
	// })
	// $("#shu_pic").mouseout(function(){
	// 	clearInterval(timer_shu)
	// 	timer_shu=setInterval(function(){
	// 	han()
	// },5000)
	// })

	// function han(){
	// 	nums++;
 //  		if(nums>=4){
 //  			$("#shu_pic").css("left","0")
 //  			nums=1;
  			
 //  		}else if(nums==3){
	// 	$("#tu_shu li").eq(0).css("background","#5e5e5e")
	// 	$("#tu_shu li").eq(2).css("background","#fff")
	// }

 //  		$("#shu_pic").stop().animate({left:-335*nums},500)
 //  		$("#tu_shu li").eq(nums).css("background","#5e5e5e").siblings().css("background","#fff")
	// }
