$(function(){

$("#box li").click(function(){
			$(".span_s").html($(this).text())
		})

			var count=0;
			$("#zhonglei a").click(function(){
				count++;
				console.log(count)
				$("#fenlei .qubflei span").html($(this).text())

				if(count){
					$("#zhonglei").css("display","none")
					count=0;
				}
			$(".qubflei").mouseenter(function(){
		 		$("#zhonglei").show()
		 })
				
	})


	// 搜索框
	window.onscroll=function(){
		var top = document.documentElement.scrollTop ||  document.body.scrollTop;
		var head1=document.getElementById("head1")
		if(top>666){
			
			
			head1.style.display="block";

		}else{
			head1.style.display="none"
		}
	}

	var put=document.getElementById("put")
	var btn=document.getElementById("btn")
	put.onfocus=function(){
		put.value="";
	}
    btn.onclick=function(){

    }
		
		// 轮播图
		var sum=0;

		$(".dalunb #lun_right").click(function(){
			clearInterval(timer)
			move()
			move2()
			// sum++;
			// if(sum==$("#banner_top li").length){
			// 	sum=0;
			// }
			// move2()
			
			// $("#banner_top li").eq(sum).fadeIn().siblings("#banner_top li").fadeOut()
			// $("#shuzi li").eq(sum).css("background","#ff2832").siblings("#shuzi li").css("background","#646464")
		})
		$(".dalunb #lun_left").click(function(){
			clearInterval(timer)
			sum--;
			
			if(sum == -1){
             sum= $("#banner_top li").length - 1;
             }
             move2()
			$("#banner_top li").eq(sum).fadeIn().siblings("#banner_top li").fadeOut();
			$("#shuzi li").eq(sum).css("background","#ff2832").siblings("#shuzi li").css("background","#646464")
		})

		$("#shuzi li").mouseenter(function(){
			clearInterval(timer)
			move2()
			$(this).css("background","#ff2832").siblings("#shuzi li").css("background","#646464")
			$("#banner_top li").eq($(this).text()-1).fadeIn().siblings("#banner_top li").fadeOut()
			sum=$(this).index()
		})
			function move(){
				sum++;
				
				
				if(sum==8){

				sum=0;

			}

				$("#banner_top li").eq(sum).fadeIn().siblings("#banner_top li").fadeOut();
				$("#shuzi li").eq(sum).css("background","#ff2832").siblings("#shuzi li").css("background","#646464")

			}

			function move3(){
			sum--;
			
			if(sum == -1){
             sum= 7;
             }
             
			$("#banner_top li").eq(sum).fadeIn().siblings("#banner_top li").fadeOut();
			$("#shuzi li").eq(sum).css("background","#ff2832").siblings("#shuzi li").css("background","#646464")

			}
			var timer=null;
		
		 	timer=setInterval(function(){

		 		
				move();
				move2();
			},5000)
		 
			
			 
		   $(".banner_center").mouseenter(function(){
		 		clearInterval(timer)
		  })
		   $(".banner_center").mouseleave(function(){
		   	clearInterval(timer)
		 		timer=setInterval(function(){
				move();	
				move2();
			},5000)
		  })

	//轮播小拼接
	var ban11=document.getElementById("ban1")
	var ban22=document.getElementById("ban2")
	var data1=[{url:"images/xia1.jpg"},
			{url:"images/xia2.jpg"},
			{url:"images/xia3.jpg"},
			{url:"images/xia4.jpg"}
			
	]
	var data2=[
			{url:"images/xia5.jpg"},
			{url:"images/xia6.jpg"},
			{url:"images/xia7.jpg"},
			{url:"images/xia8.jpg"}
			
	]
	bian()
	function bian(){
	var str="";
	var str2="";
	data1.forEach(function(item,index){
		str+=`<li class="tu1"><a href="#"><img src="${item.url}" alt=""><span class="cover"></span></a></li>`
	})
	data2.forEach(function(item,index){
		str2+=`<li class="tu2"><a href="#"><img src="${item.url}" alt=""><span class="cover"></span></a></li>`
	})
	ban11.innerHTML=str;
	ban22.innerHTML=str2;
	}
	// var jia=1;
	// $("#banner_bottom .ban_left").click(function(){
	// 	jia--;
	// 	if(jia==-1){
	// 		jia=1;
	// 	}
	// 	$("#banner_bottom ul").eq(jia).css({opacity:"0"}).siblings("ul").css({opacity:"1"})
	// })
	// $("#banner_bottom .ban_right").click(function(){
	// 	jia++;
	// 	if(jia==2){
	// 		jia=0;
	// 	}
	// 	console.log(jia)
	// 	$("#banner_bottom ul").eq(jia).css({opacity:"0"}).siblings("ul").css({opacity:"1"})
		
	// }) 

	var jia=1;
	$("#banner_bottom .ban_left").click(function(){
		move3();
		jia--;
	 	if(jia==-1){
	 		jia=1;
		}
 	$("#banner_bottom ul").eq(jia).css({opacity:"0"}).siblings("ul").css({opacity:"1"})

	})
	$("#banner_bottom .ban_right").click(function(){
		jia++;
		if(jia==2){
			jia=0;
		}
		move()
		
		$("#banner_bottom ul").eq(jia).css({opacity:"0"}).siblings("ul").css({opacity:"1"})
		
	}) 
	$("#banner_bottom li a").mouseenter(function(){
		
		$(".cover").eq($(this).parent().index()).css("display","none")
	})
	$("#banner_bottom li a").mouseleave(function(){
		
		$(".cover").eq($(this).parent().index()).css("display","block")
	})
	
	function move2(){
		jia++;
		if(jia==2){
			jia=0;
		}
		
		$("#banner_bottom ul").eq(jia).css({opacity:"0"}).siblings("ul").css({opacity:"1"})
		// $("#banner_bottom ul").eq(jia).fadeIn().siblings("ul").fadeOut()
	}
	// banner_right的数据
	var data3=[{url:"images/shu1.jpg"}];
	var ybox=document.getElementById("you_box")
	
	shu();
	function shu(){
		var str3="";
		data3.forEach(function(item,index){
			str3+=`<a href="#" class="yay"><img src="${item.url}" class="ytup"></a>`
		})
		ybox.innerHTML=str3;
	}

	//信息公告 服务公告
	var nr1_one=document.getElementById("nr1_one")
	var nr2_one=document.getElementById("nr2_one")

	var data4=[
	{wenzi:"361度特惠 运动鞋折上2件6折"},
	{wenzi:"社科图书每满100减50"},
	{wenzi:"水星家纺狂欢 每满200减100"},
	{wenzi:"万种图书每满100减40"},
	{wenzi:"小熊萌家电每满300减20"}]
	var data5=[
	{wenzi:"积分支付上线了，直接当钱用！"},
	{wenzi:"当当阅读器 海量电子书随时读"},
	{wenzi:"话费卡兑换当当礼品卡"},
	{wenzi:"网销礼品卡国庆盛宴"},
	{wenzi:"关于假冒客服诈骗的声明"}]
	nr(data4,nr1_one);
	nr(data5,nr2_one);
	function nr(shuju,ele){
	var str_g="";
	shuju.forEach(function(item,index){
		str_g+=`<li><a href="#"><span>${item.wenzi}</span></a></li>`
	})
	ele.innerHTML=str_g;
	}
	$(".gao1").mouseenter(function(){
		$(".nr1").css("display","block").siblings().css("display","none")
		$(this).removeClass("beij")
		$(".gao2  a").addClass("beij")
		
	})
	$(".gao2").mouseenter(function(){
		$(".nr2").css("display","block").siblings().css("display","none")
		$(".gao2  a").removeClass("beij")
		$(".gao1").addClass("beij")
	})
	
	// var timer2=null;
	// timer2=setInterval(function(){
	// 		ggao()
	// },300)
	// function ggao(){
		
		
		
	// }
	//右下角的轮播图移动
	var yshuzi=0;
	$("#jiaodian li").click(function(){
		$(this).css("background","#ff2832").siblings().css("background","#c8c8c8")
		 var i=$(this).index();
		 $("#you_yun").stop().animate({left:-202*i+"px"},500)
		 yshuzi=$(this).index()
	})
	$(".you2").click(function(){
		clearInterval(timer3)
		yun()
	})

	$(".zuo2").click(function(){
		clearInterval(timer3)
		yshuzi--;
		if(yshuzi==-1){
			yshuzi=2;
			$('#you_yun').css({'left':'-606px'})
			
		}

		$("#you_yun").stop().animate({left:-202*yshuzi},500)
		$("#jiaodian li").eq(yshuzi).css("background","#ff2832").siblings().css("background","#c8c8c8")
	})
	
	var timer3=null;
	timer3=setInterval(function(){
		yun()
	},6000)
	$("#you_yun").mouseenter(function(){
		clearInterval(timer3)
	})
	$("#you_yun").mouseleave(function(){
		clearInterval(timer3)
		timer3=setInterval(function(){
		yun()
		
	},6000)
	})
    function yun(){
    	yshuzi++;
		if(yshuzi>=4){
			$('#you_yun').css({'left':'0'})

			yshuzi=1;
					
	}else if(yshuzi==3){
		$("#jiaodian li").eq(0).css("background","#ff2832")
		$("#jiaodian li").eq(2).css("background","#c8c8c8")
	}
		$("#you_yun").stop().animate({left:-202*yshuzi},500)
		$("#jiaodian li").eq(yshuzi).css("background","#ff2832").siblings().css("background","#c8c8c8")
    }


	//xiao时钟
	var zhong=null;

	zhong=setInterval(function(){
	var sfm=document.getElementById("sfm")
	var now="2018/10/22 00:00:00"
	var date2=new Date(now)
	var date=new Date();
	var cha=date2.getTime()-date.getTime();
	var b=parseInt(cha/1000);
	var tian=parseInt(b/60/60/24);
	var h=parseInt((b-tian*24*60*60)/60/60);
	var m=parseInt((b-tian*24*60*60-h*60*60)/60);
	var s=parseInt(b-tian*24*60*60-h*60*60-m*60);
	if(s<10){s="0"+s;}
	if(m<10){m="0"+m;}
	if(h<10){h="0"+h;}
	var str6=`<span class="hour">${h}</span><span class="min">${m}</span><span class="sec">${s}</span>`
	sfm.innerHTML=str6;
	if(cha<=0){
    clearInterval(zhong);
  }
	},1000)
	 
	$("#time_dian a").mouseenter(function(){
		$(this).addClass("active").siblings().removeClass("active")
	})
	$("#time_dian a").mouseout(function(){
		$(this).removeClass("active")
	})

	//商品列表拼接

	var dashu=[{
		tu:"images/tupp1.jpg",title:"不管你来不来，我都不会等（要逼着自己优秀，然后骄傲地生活）",
		xian:7,yuan:29.4,juti:"不管你来不来，我都不会等（要逼着自己优秀，然后骄傲地生活）"
	},
		{
		tu:"images/tup12.jpg",title:"Hape万花筒3岁以上益智创意玩具红色蓝色绿色黄色颜色随机发货早教益智游戏E1003",
		xian:9.9,yuan:20,juti:"Hape万花筒3岁以上益智创意玩具红色蓝色绿色黄色颜色随机发货早教益智游戏E1003"
	},

		{
		tu:"images/tup13.jpg",title:"茉蒂菲莉 双肩包 休闲商务男女双肩背包智能15寸电脑包带USB充电接口大容量旅行包",
		xian:59,yuan:104.6,juti:"茉蒂菲莉 双肩包 休闲商务男女双肩背包智能15寸电脑包带USB充电接口大容量旅行包"
	},
		{
		tu:"images/tup14.jpg",title:"聪明人用方格笔记本：进阶图解",
		xian:15,yuan:27.2,juti:"聪明人用方格笔记本：进阶图解"
	},
		{
		tu:"images/tup15.jpg",title:"万物有灵（诗经名物注音朗诵版）（附赠六幅 “岁月静好”装帧画）",
		xian:19.9,yuan:46.5,juti:"万物有灵（诗经名物注音朗诵版）（附赠六幅 “岁月静好”装帧画）"
	},
		{
		tu:"images/tup16.jpg",title:"【10.11-10.14品牌日】探路者（TOREAD） 户外秋冬男鞋耐磨透气越野跑鞋徒步鞋KFFE91345",
		xian:159,yuan:590,juti:"【10.11-10.14品牌日】探路者（TOREAD） 户外秋冬男鞋耐磨透气越野跑鞋徒步鞋KFFE91345"
	},
		{
		tu:"images/tup17.jpg",title:"一千零一夜 统编语文教科书五年级（上）指定阅读  快乐读书吧丛书   (国际插画美绘 我爱童话 珍藏版）",
		xian:8.9,yuan:10.9,juti:"一千零一夜 统编语文教科书五年级（上）指定阅读  快乐读书吧丛书   (国际插画美绘 我爱童话 珍藏版）"
	},
		{
		tu:"images/tup18.jpg",title:"常规款羽绒服男士冬季保暖外套",
		xian:75,yuan:189,juti:"常规款羽绒服男士冬季保暖外套"
	},
		{
		tu:"images/tup19.jpg",title:"【热卖人气女神款】小清新系带连衣裙2018秋冬季新款韩版蝴蝶结chic裙显瘦复古长袖初恋鱼尾裙",
		xian:78,yuan:209,juti:"【热卖人气女神款】小清新系带连衣裙2018秋冬季新款韩版蝴蝶结chic裙显瘦复古长袖初恋鱼尾裙"
	},
		{
		tu:"images/tup20.jpg",title:"当当优品 纯棉日式水洗棉简约双人加大四件套 床单款 灰蓝",
		xian:199,yuan:699,juti:"当当优品 纯棉日式水洗棉简约双人加大四件套 床单款 灰蓝"
	}]
	var list_2=document.getElementById("list_2")
	shopping();
  function shopping(){
  	 var str7="";
   dashu.forEach(function(item,index){
   	str7+=`<div class="info"><a href="#" class="pic"><img src="${item.tu}" alt="" title="${item.title}"></a><div class="tuot">
	<div class="xia1"><span class="jdut"></span></div><div class="shang1"><span class="baifb">已秒杀</span></div>
	</div><a href="#" class="juti" title="">${item.title}</a><p class="money">秒杀价:¥<span class="xianjian">${item.xian}</span> <span class="yuanjia">${item.yuan}</span></p>
</div>`
   })
   list_2.innerHTML=str7;
  }

  $(".info a").click(function(){
  	return false
  })
  	// $(".info .shang1").click(function(){

  	// 	bai++;
  	// 	console.log($(this).parent().parent().index())
  	// 	$(this).html($(".shang1 .baifb").eq($(this).parent().parent().index()).html()+bai+"%")
  	// 	if(bai==10){
  	// 	return 	$(".shang1").eq($(this).parent().parent().index()).html("秒杀结束")

  	// 	}
  	// })

  	var bai=0;
  	var he=0;
  	var timer44=setInterval(function(){
  		he++;
  		bai+=6;
  		// console.log($(this).parent().parent().index())
  		$(".info .shang1").eq((he-1)).html($(".shang1 .baifb").eq($(".info .shang1").parent().parent().index()).html()+bai+"%")
  		$(".jdut").eq((he-1)).css("width",bai)
  		if(bai==100){
  		$(".shang1").eq(he).html("秒杀结束")

  		}
  	},2000)


  	

  	//厂商周下的内容

  	$("#quan_dd li").mouseenter(function(){
  		$(this).css("background","#ff2832").siblings().css("background","#c8c8c8")
  		$("#list_3 ul").eq($(this).index()).css("display","block").siblings().css("display","none")
  		console.log($(this).index())
  	})

  	var timer5=null;
  	var po=0;
  	timer5=setInterval(function(){
  		po++;
  		if(po==2){
  			po=0;
  			
  		}
  		$("#quan_dd li").eq(po).css("background","#ff2832").siblings().css("background","#c8c8c8")
  		$("#list_3 ul").eq(po).css("display","block").siblings().css("display","none")

  	},2000)

  	// $("#list_3 ul a").mouseenter(function(){
  	// 	console.log($(this).eq($(this).parent().index()))
  	// 	$(this).eq($(this).parent().index()).css({left:"-9px"})
  	// })


  	//拼接尾品汇

  	var str8="";
  	var str9="";
  	var you_xin=document.getElementById("you_xin")
  	var you_xia1=document.getElementById("you_xia1")
  	var data7=[
  		"images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg","images/pic5.jpg"
  	]
  	var data8=[
  		"images/pc1.jpg","images/pc2.jpg","images/pc3.jpg","images/pc4.jpg","images/pc5.jpg"
  	]

  	data7.forEach(function(item,index){
  		str8+=`<li><a href="#" class="xin_list"><img src="${item}" alt=""></a></li>`
  	})
  	data8.forEach(function(item,index){
  		str9+=`<li><a href="#" class="xia_list"><img src="${item}" alt=""></a></li>`
  	})
  	you_xin.innerHTML=str8;
  	you_xia1.innerHTML=str9;




  	//网络文学shulist


  	


  	$("#shulist .shu1").mouseenter(function () {
        //两件事件
        $(this).addClass("shu3").siblings().removeClass("shu3");
        var idx = $(this).index();
        $("#tuzuo2 .wenzi1").eq(idx).addClass("sel").siblings().removeClass("sel");
      });
  	
  		
  	// 图书网络文学电子书的轮播图
  	$("#shu_pic li a").click(function(){
  		return false
  	})


	shuo()
	function shuo(){
		$("#tu_shu li").click(function(){
  		var sz=$(this).index()
  		$("#shu_pic").stop().animate({left:-335*sz},500)
  		$("#tu_shu li").eq(sz).css("background","#5e5e5e").siblings().css("background","#fff")
  		nums=$(this).index()
  	})
  	var nums=0;
  	$(".tushu1").click(function(){
  		clearInterval(timer_shu)
  		nums--;
  		
  		if(nums==-1){
  			
  			nums=2;
  			$("#shu_pic").css("left","-1005px")
  		}

  		$("#shu_pic").stop().animate({left:-335*nums},500)
  		$("#tu_shu li").eq(nums).css    ("background","#5e5e5e").siblings().css("background","#fff")

  	})

  	$(".tushu2").click(function(){
  		clearInterval(timer_shu)
  		han()

  	})
    var timer_shu=null;
  	timer_shu=setInterval(function(){
		han()
	},5000)

	$("#shu_pic").mouseenter(function(){
		clearInterval(timer_shu)
	})
	$("#shu_pic").mouseout(function(){
		clearInterval(timer_shu)
		timer_shu=setInterval(function(){
		han()
	},5000)
	})

	function han(){
		nums++;
  		if(nums>=4){
  			$("#shu_pic").css("left","0")
  			nums=1;
  			
  		}else if(nums==3){
		$("#tu_shu li").eq(0).css("background","#5e5e5e")
		$("#tu_shu li").eq(2).css("background","#fff")
	}

  		$("#shu_pic").stop().animate({left:-335*nums},500)
  		$("#tu_shu li").eq(nums).css("background","#5e5e5e").siblings().css("background","#fff")
	}

	}

jian()
	function jian(){
		$("#tu_shu3 li").click(function(){
  		var sz=$(this).index()
  		$("#shu_pic3").stop().animate({left:-335*sz},500)
  		$("#tu_shu3 li").eq(sz).css("background","#5e5e5e").siblings().css("background","#fff")
  		nums=$(this).index()
  	})
  	var nums=0;
  	$(".tushu1").click(function(){
  		clearInterval(timer_shu)
  		nums--;
  		
  		if(nums==-1){
  			
  			nums=2;
  			$("#shu_pic3").css("left","-1005px")
  		}

  		$("#shu_pic3").stop().animate({left:-335*nums},500)
  		$("#tu_shu3 li").eq(nums).css("background","#5e5e5e").siblings().css("background","#fff")

  	})

  	$(".tushu2").click(function(){
  		clearInterval(timer_shu)
  		han()

  	})
    var timer_shu=null;
  	timer_shu=setInterval(function(){
		han()
	},5000)

	$("#shu_pic3").mouseenter(function(){
		clearInterval(timer_shu)
	})
	$("#shu_pic3").mouseout(function(){
		clearInterval(timer_shu)
		timer_shu=setInterval(function(){
		han()
	},5000)
	})

	function han(){
		nums++;
  		if(nums>=4){
  			$("#shu_pic3").css("left","0")
  			nums=1;
  			
  		}else if(nums==3){
		$("#tu_shu3 li").eq(0).css("background","#5e5e5e")
		$("#tu_shu3 li").eq(2).css("background","#fff")
	}

  		$("#shu_pic3").stop().animate({left:-335*nums},500)
  		$("#tu_shu3 li").eq(nums).css("background","#5e5e5e").siblings().css("background","#fff")
	}

	}

//电子书
	xiaos()
	function xiaos(){
		$("#tu_shu4 li").click(function(){
  		var sz=$(this).index()
  		$("#shu_pic4").stop().animate({left:-335*sz},500)
  		$("#tu_shu4 li").eq(sz).css("background","#5e5e5e").siblings().css("background","#fff")
  		nums=$(this).index()
  	})
  	var nums=0;
  	$(".tushu1").click(function(){
  		clearInterval(timer_shu)
  		nums--;
  		
  		if(nums==-1){
  			
  			nums=2;
  			$("#shu_pic4").css("left","-1005px")
  		}

  		$("#shu_pic4").stop().animate({left:-335*nums},500)
  		$("#tu_shu4 li").eq(nums).css("background","#5e5e5e").siblings().css("background","#fff")

  	})

  	$(".tushu2").click(function(){
  		clearInterval(timer_shu)
  		han()

  	})
    var timer_shu=null;
  	timer_shu=setInterval(function(){
		han()
	},5000)

	$("#shu_pic4").mouseenter(function(){
		clearInterval(timer_shu)
	})
	$("#shu_pic4").mouseout(function(){
		clearInterval(timer_shu)
		timer_shu=setInterval(function(){
		han()
	},5000)
	})

	function han(){
		nums++;
  		if(nums>=4){
  			$("#shu_pic4").css("left","0")
  			nums=1;
  			
  		}else if(nums==3){
		$("#tu_shu4 li").eq(0).css("background","#5e5e5e")
		$("#tu_shu4 li").eq(2).css("background","#fff")
	}

  		$("#shu_pic4").stop().animate({left:-335*nums},500)
  		$("#tu_shu4 li").eq(nums).css("background","#5e5e5e").siblings().css("background","#fff")
	}

	}
//网络文学
wenxue()
	function wenxue(){
		$("#tu_shu5 li").click(function(){
  		var sz=$(this).index()
  		$("#shu_pic5").stop().animate({left:-335*sz},500)
  		$("#tu_shu5 li").eq(sz).css("background","#5e5e5e").siblings().css("background","#fff")
  		nums=$(this).index()
  	})
  	var nums=0;
  	$(".tushu1").click(function(){
  		clearInterval(timer_shu)
  		nums--;
  		
  		if(nums==-1){
  			
  			nums=1;
  			$("#shu_pic5").css("left","-670px")
  		}

  		$("#shu_pic5").stop().animate({left:-335*nums},500)
  		$("#tu_shu5 li").eq(nums).css("background","#5e5e5e").siblings().css("background","#fff")

  	})

  	$(".tushu2").click(function(){
  		clearInterval(timer_shu)
  		han()

  	})
    var timer_shu=null;
  	timer_shu=setInterval(function(){
		han()
	},2000)

	$("#shu_pic5").mouseenter(function(){
		clearInterval(timer_shu)
	})
	$("#shu_pic5").mouseout(function(){
		clearInterval(timer_shu)
		timer_shu=setInterval(function(){
		han()
	},2000)
	})

	function han(){
		nums++;
  		if(nums>=3){
  			$("#shu_pic5").css("left","0")
  			nums=1;
  			
  		}else if(nums==2){
		$("#tu_shu5 li").eq(0).css("background","#5e5e5e")
		$("#tu_shu5 li").eq(1).css("background","#fff")
	}

  		$("#shu_pic5").stop().animate({left:-335*nums},500)
  		$("#tu_shu5 li").eq(nums).css("background","#5e5e5e").siblings().css("background","#fff")
	}

	}

//电子书拼接字符串
    var str10="";
    var kewai=document.getElementById("kewai")
    var a=[{
    	im:"images/yu3.jpg",con:"郭论(郭德纲2018年重磅新作)",jia1:41.50,jia2:49.80
    },{
    	im:"images/yu6.jpg",con:"小读客·这是什么呀·3~6岁美国经典绘本大百科（给孩子的万物启蒙书！美国国宝级童书品牌！）（天气系列）",jia1:151.20,jia2:192.00
    },
    	{
    	im:"images/yu5.jpg",con:"同学录套装（全二册）（甜宠《换装游戏》小剧场+“萌动”同学录折卡！书海沧生暌违三年高口碑期待之作！）",jia1:57.50,jia2:60.80
    },
    {
    	im:"images/yu7.jpg",con:"中国唱诗班（全四册）（相思+游子吟+元日+饮湖上初晴后雨）",jia1:41.50,jia2:49.80
    }

    ]


    a.forEach(function(item,index){
    	str10+=`<li class="shu_pic"><a href="#"><img src="${item.im}" alt="" title="${item.con}"></a><p class="pui"><a href="#" class="wue" title="">${item.con}
	</a></p><p class="qian"><span class="xian1">¥${item.jia1}</span><span class="yuan1">¥${item.jia2}</span></p></li>`
    })
   
    kewai.innerHTML=str10;
	
	var str11="";
	var ban_xia=document.getElementById("ban_xia")	
  	var b=[
  	{
    	im:"images/yu1.jpg",con:"AI·未来(李开复博士深度解析人工智能未来十年大趋势)",jia1:41.50,jia2:49.80
    },{
    	im:"images/yu2.jpg",con:"好好说话1+2",jia1:68.10,jia2:104.00
    }
  	]
  	b.forEach(function(item,index){
    	str11+=`<div class="ban_xia1"><a href=""><img src="${item.im}" alt="" title="${item.con}"></a>
		<p class="opso"><a href="#" class="cott" title="">${item.con}</a></p><p class="qian"><span class="xian1">¥${item.jia1}</span><span class="yuan1">¥${item.jia2}</span></p></div>`
    })
  	 ban_xia.innerHTML=str11;


//独家
  
  	

  	 // $("#tuzuo2 a").click(function(){
  	 // 	return false
  	 // })
  	 
    



    //电子书拼接的item；

    var gg="";
    var dds=[
    	{
    		tupic:"images/lii1.jpg",tit:"国际大奖科普绘本（全6册） 获20余项国际大奖，数十种国际权威机构赞誉推荐",tou:"著名环境学家+国际大奖插画家联"
    	},
    	{
    		tupic:"images/lii2.jpg",tit:"森林鱼童书:狮子和老鼠(凯迪克金奖，让孩子懂得友谊、宽容、感恩，经典版本）",tou:"关于友谊与感恩的杰作，气"
    	},{
    		tupic:"images/lii3.jpg",tit:"神奇树屋·美国国宝级童书·故事系列·基础版·第1 2辑中文版礼盒装（1-8册）适合5-12岁儿童",tou:"",tou:""
    	}
    	,{
    		tupic:"images/lii4.jpg",tit:"落叶跳舞(2018版 秋季主题阅读首选）",tou:"巧妙地利用不同颜色和形状的落叶，绘成出人意料的丰富画面",tou:""
    	},
    	{
    		tupic:"images/lii5.jpg",tit:"小读客·这是什么呀·3~6岁美国经典绘本大百科（给孩子的万物启蒙书！美国国宝级童书品牌！）（天气系列）",tou:""
    	},
    	{
    		tupic:"images/lii6.jpg",tit:"成语故事(全20册)绘本版",tuo:"帮孩子轻松学成语的原创成语图画书，学前教育、传统文化研究、儿童文学、儿",tou:""
    	},
    	{
    		tupic:"images/lii7.jpg",tit:"这是我的家:大自然的动物筑巢诗（精装，国际大奖科普绘本）",tuo:"美国作家名人堂、德鲁里大学桂冠诗人、美国先",tou:""
    	},
    	{
    		tupic:"images/lii8.jpg",tit:"小读客·宝宝第一套好性格  养成书:皮特猫第四辑（套装共6册）（乐观、自信、勇敢……皮特猫在美国家喻户晓，几乎每个孩子都在读！）",tou:""
    	},
    	{
    		tupic:"images/lii9.jpg",tit:"孩子你在想什么—15堂极简哲学课（全15册，探讨了关于朋友、钱、真实、死亡等话题，解决孩子成长的烦恼，",tou:""
    	},
    	{
    		tupic:"images/lii10.jpg",tit:"地理星球：马可波罗游记（给孩子的第一本地理启蒙书，为孩子架构整体的历史地理观，培养孩子的国际视野）",tou:""
    	}

    ]
    
    var linear=document.getElementById("linear")
    dds.forEach(function(item,index){
    	
    	if(index===0){
    		gg+=`<li class="item1 ru1" add="${index}"><span class="num1">${(index+1)}</span>
	<p class="yidh"><a href="#" title="${item.tit}">${item.tit}<span></span></a></p></li>
		<li class="item11 chu1" add="${index}"><span class="num1">${(index+1)}</span>
		<a href="#" class="ru"><img src="${item.tupic}" alt="" title="${item.tit}"></a><p class="yidh">				
		<a href="#" title="${item.tit}">${item.tit}<span>${item.tou}</span></a></p></li>`		
	}else{
		gg+=`<li class="item1" add="${index}"><span class="num1">${(index+1)}</span>
	<p class="yidh"><a href="#" title="${item.tit}">${item.tit}<span></span></a></p></li>
		<li class="item11" add="${index}"><span class="num1">${(index+1)}</span>
		<a href="#" class="ru"><img src="${item.tupic}" alt="" title="${item.tit}"></a><p class="yidh">				
		<a href="#" title="${item.tit}">${item.tit}<span>${item.tou}</span></a></p></li>`						
	}

    	
							
								
    })
 linear.innerHTML=gg



 	$("#linear .item1").mouseenter(function(){

 		var ges=$(this).attr("add")
 		
 	$(".item1").eq(parseInt(ges)).addClass("ru1").siblings(".item1").removeClass("ru1")
 		$(".item11").eq(parseInt(ges)).addClass("chu1").siblings(".item11").removeClass("chu1")
 	})

 	




 	

  //服装的轮播图
 zhuang()
   		function zhuang(){
   			$("#fu_shu li").click(function(){
  		var sz=$(this).index()
  		console.log(sz)
  		$("#ba_fu").stop().animate({left:-383*sz},400)
  		$("#fu_shu li").eq(sz).css("background","#5e5e5e").siblings().css("background","#fff")
  		nufu=$(this).index()
  	})
  	var nufu=0;
  	$(".fushu1").click(function(){
  		clearInterval(timer_fu)
  		nufu--;
  		
  		if(nufu==-1){
  			
  			nufu=3;
  			$("#ba_fu").css("left","-1532px")
  		}

  		$("#ba_fu").stop().animate({left:-383*nufu},400)
  		$("#fu_shu li").eq(nufu).css("background","#5e5e5e").siblings().css("background","#fff")

  	})

  	$(".fushu2").click(function(){
  		clearInterval(timer_fu)
  		wun()

  	})
    var timer_fu=null;
  	timer_fu=setInterval(function(){
		wun()
	},5000)

	$("#ba_fu").mouseenter(function(){
		clearInterval(timer_fu)
	})
	$("#ba_fu").mouseout(function(){
		clearInterval(timer_fu)
		timer_fu=setInterval(function(){
		wun()
	},5000)
	})

	function wun(){
		nufu++;
  		if(nufu>=5){
  			$("#ba_fu").css("left","0")
  			nufu=1;
  			
  		}else if(nufu==4){
		$("#fu_shu li").eq(0).css("background","#5e5e5e")
		$("#fu_shu li").eq(3).css("background","#fff")
	}

  		$("#ba_fu").stop().animate({left:-383*nufu},400)
  		$("#fu_shu li").eq(nufu).css("background","#5e5e5e").siblings().css("background","#fff")
	} 
   		}

	// 服装切换   
	$("#fulist .fu1").mouseenter(function () {
        //两件事件
        $(this).addClass("fu3").siblings().removeClass("fu3");
        var idx = $(this).index();
        $("#fu_xia .fushi").eq(idx).addClass("shi").siblings().removeClass("shi");
      });

	//服装拼接

	var fu_one="";
  	var fu_two="";
  	var fu_pic=document.getElementById("fu_pic")
  	var xiao_tu=document.getElementById("xiao_tu")
  	var data_fu=[
  		"images/shi1.jpg","images/shi2.jpg","images/shi3.jpg"
  	]
  	var data1_fu=[
  		"images/ma1.jpg","images/ma2.jpg","images/ma3.jpg","images/ma4.jpg","images/ma5.jpg"
  	]
  	
  	function mu(jie,fucot,shou){
  		jie.forEach(function(item,index){
  		fucot+=`<li><a href="#"><img src="${item}" alt=""></a></li>`
  	})
  		shou.innerHTML=fucot
  	
  	}
  	mu(data1_fu,fu_two,xiao_tu)
  	mu(data_fu,fu_one,fu_pic)


  	
  	

  		
  //运动潮流
  chao()
function chao(){
	  $("#fu_shu2 li").click(function(){
  		var sz=$(this).index()
  		console.log(sz)
  		$("#ba_fu2").stop().animate({left:-383*sz},400)
  		$("#fu_shu2 li").eq(sz).css("background","#5e5e5e").siblings().css("background","#fff")
  		nufu=$(this).index()
  	})
  	var nufu=0;
  	$(".fushu1").click(function(){
  		clearInterval(timer_fu)
  		nufu--;
  		console.log(nufu)
  		
  		if(nufu==-1){
  			
  			nufu=7;
  			$("#ba_fu2").css("left","-3064px")
  		}

  		$("#ba_fu2").stop().animate({left:-383*nufu},400)
  		$("#fu_shu2 li").eq(nufu).css("background","#5e5e5e").siblings().css("background","#fff")

  	})

  	$(".fushu2").click(function(){
  		wun()
  		clearInterval(timer_fu)

  	})
    var timer_fu=null;
  	timer_fu=setInterval(function(){
		wun()
	},5000)

	$("#ba_fu2").mouseenter(function(){
		clearInterval(timer_fu)
	})
	$("#ba_fu2").mouseout(function(){
		clearInterval(timer_fu)
		timer_fu=setInterval(function(){
		wun()
	},5000)
	})

	function wun(){
		nufu++;
  		if(nufu>=9){
  			$("#ba_fu2").css("left","0")
  			nufu=1;
  			
  		}else if(nufu==8){
		$("#fu_shu2 li").eq(0).css("background","#5e5e5e")
		$("#fu_shu2 li").eq(7).css("background","#fff")
	}

  		$("#ba_fu2").stop().animate({left:-383*nufu},400)
  		$("#fu_shu2 li").eq(nufu).css("background","#5e5e5e").siblings().css("background","#fff")
	} 
}

  //运动潮流拼接
  var fu_one1="";
  	var fu_two1="";
  	var fu_pic2=document.getElementById("fu_pic2")
  	var xiao_tu2=document.getElementById("xiao_tu2")
  	var data_fu2=[
  		"images/yun9.jpg","images/yun10.jpg","images/yun11.jpg"
  	]
  	var data1_fu2=[
  		"images/yun12.jpg","images/yun13.jpg","images/yun14.jpg","images/yun15.jpg","images/yun16.jpg"
  	]
  	mu(data1_fu2,fu_two1,xiao_tu2)
  	mu(data_fu2,fu_one1,fu_pic2)




  //女装男装内衣
  nei()
  function nei(){
   	$("#fu_shu3 li").click(function(){
  		var sz=$(this).index()
  		console.log(sz)
  		$("#ba_fu3").stop().animate({left:-383*sz},400)
  		$("#fu_shu3 li").eq(sz).css("background","#5e5e5e").siblings().css("background","#fff")
  		nufu=$(this).index()
  	})
  	var nufu=0;
  	$(".fushu1").click(function(){
  		clearInterval(timer_fu)
  		nufu--;
  		
  		if(nufu==-1){
  			
  			nufu=3;
  			$("#ba_fu3").css("left","-1532px")
  		}

  		$("#ba_fu3").stop().animate({left:-383*nufu},400)
  		$("#fu_shu3 li").eq(nufu).css("background","#5e5e5e").siblings().css("background","#fff")

  	})

  	$(".fushu2").click(function(){
  		clearInterval(timer_fu)
  		wun()

  	})
    var timer_fu=null;
  	timer_fu=setInterval(function(){
		wun()
	},5000)

	$("#ba_fu3").mouseenter(function(){
		clearInterval(timer_fu)
	})
	$("#ba_fu3").mouseout(function(){
		clearInterval(timer_fu)
		timer_fu=setInterval(function(){
		wun()
	},5000)
	})

	function wun(){
		nufu++;
  		if(nufu>=5){
  			$("#ba_fu3").css("left","0")
  			nufu=1;
  			
  		}else if(nufu==4){
		$("#fu_shu3 li").eq(0).css("background","#5e5e5e")
		$("#fu_shu3 li").eq(3).css("background","#fff")
	}

  		$("#ba_fu3").stop().animate({left:-383*nufu},400)
  		$("#fu_shu3 li").eq(nufu).css("background","#5e5e5e").siblings().css("background","#fff")
	} 
   		}

   	//女装男装内衣拼接
   	 var fu_one3="";
  	var fu_two3="";
  	var fu_pic3=document.getElementById("fu_pic3")
  	var xiao_tu3=document.getElementById("xiao_tu3")
  	var data_fu3=[
  		"images/nei5.jpg","images/nei6.jpg","images/nei7.jpg"
  	]
  	var data1_fu3=[
  		"images/nei8.jpg","images/nei9.jpg","images/nei10.jpg","images/nei11.jpg","images/nei12.jpg"
  	]
  	mu(data1_fu3,fu_two3,xiao_tu3)
  	mu(data_fu3,fu_one3,fu_pic3)

  	//童装童鞋
  	tong()
  function tong(){
   	$("#fu_shu4 li").click(function(){
  		var sz=$(this).index()
  		console.log(sz)
  		$("#ba_fu4").stop().animate({left:-383*sz},400)
  		$("#fu_shu4 li").eq(sz).css("background","#5e5e5e").siblings().css("background","#fff")
  		nufu=$(this).index()
  	})
  	var nufu=0;
  	$(".fushu1").click(function(){
  		clearInterval(timer_fu)
  		nufu--;
  		
  		if(nufu==-1){
  			
  			nufu=2;
  			$("#ba_fu4").css("left","-1149px")
  		}

  		$("#ba_fu4").stop().animate({left:-383*nufu},400)
  		$("#fu_shu4 li").eq(nufu).css("background","#5e5e5e").siblings().css("background","#fff")

  	})

  	$(".fushu2").click(function(){
  		clearInterval(timer_fu)
  		wun()

  	})
    var timer_fu=null;
  	timer_fu=setInterval(function(){
		wun()
	},5000)

	$("#ba_fu4").mouseenter(function(){
		clearInterval(timer_fu)
	})
	$("#ba_fu4").mouseout(function(){
		clearInterval(timer_fu)
		timer_fu=setInterval(function(){
		wun()
	},5000)
	})

	function wun(){
		nufu++;
  		if(nufu>=4){
  			$("#ba_fu4").css("left","0")
  			nufu=1;
  			
  		}else if(nufu==3){
		$("#fu_shu4 li").eq(0).css("background","#5e5e5e")
		$("#fu_shu4 li").eq(2).css("background","#fff")
	}

  		$("#ba_fu4").stop().animate({left:-383*nufu},400)
  		$("#fu_shu4 li").eq(nufu).css("background","#5e5e5e").siblings().css("background","#fff")
	} 
   		}

  	//童装拼接
  	 var fu_one4="";
  	var fu_two4="";
  	var fu_pic4=document.getElementById("fu_pic4")
  	var xiao_tu4=document.getElementById("xiao_tu4")
  	var data_fu4=[
  		"images/tong4.jpg","images/tong5.jpg","images/tong6.jpg"
  	]
  	var data1_fu4=[
  		"images/tong7.jpg","images/tong8.jpg","images/tong9.jpg","images/tong10.jpg","images/tong11.jpg"
  	]
  	mu(data1_fu4,fu_two4,xiao_tu4)
  	mu(data_fu4,fu_one4,fu_pic4)

  	//鞋箱鞋包

 bao()
  function bao(){
   	$("#fu_shu5 li").click(function(){
  		var sz=$(this).index()
  		console.log(sz)
  		$("#ba_fu5").stop().animate({left:-383*sz},400)
  		$("#fu_shu5 li").eq(sz).css("background","#5e5e5e").siblings().css("background","#fff")
  		nufu=$(this).index()
  	})
  	var nufu=0;
  	$(".fushu1").click(function(){
  		clearInterval(timer_fu)
  		nufu--;
  		
  		if(nufu==-1){
  			
  			nufu=3;
  			$("#ba_fu5").css("left","-1532px")
  		}

  		$("#ba_fu5").stop().animate({left:-383*nufu},400)
  		$("#fu_shu5 li").eq(nufu).css("background","#5e5e5e").siblings().css("background","#fff")

  	})

  	$(".fushu2").click(function(){
  		clearInterval(timer_fu)
  		wun()

  	})
    var timer_fu=null;
  	timer_fu=setInterval(function(){
		wun()
	},5000)

	$("#ba_fu5").mouseenter(function(){
		clearInterval(timer_fu)
	})
	$("#ba_fu5").mouseout(function(){
		clearInterval(timer_fu)
		timer_fu=setInterval(function(){
		wun()
	},5000)
	})

	function wun(){
		nufu++;
  		if(nufu>=5){
  			$("#ba_fu5").css("left","0")
  			nufu=1;
  			
  		}else if(nufu==4){
		$("#fu_shu5 li").eq(0).css("background","#5e5e5e")
		$("#fu_shu5 li").eq(3).css("background","#fff")
	}

  		$("#ba_fu5").stop().animate({left:-383*nufu},400)
  		$("#fu_shu5 li").eq(nufu).css("background","#5e5e5e").siblings().css("background","#fff")
	} 
   		}

   		//鞋包拼接

   	 var fu_one5="";
  	var fu_two5="";
  	var fu_pic5=document.getElementById("fu_pic5")
  	var xiao_tu5=document.getElementById("xiao_tu5")
  	var data_fu5=[
  		"images/bao5.jpg","images/bao6.jpg","images/bao7.jpg"
  	]
  	var data1_fu5=[
  		"images/bao8.jpg","images/bao9.jpg","images/bao10.jpg","images/bao11.jpg","images/bao12.jpg"
  	]
  	mu(data1_fu5,fu_two5,xiao_tu5)
  	mu(data_fu5,fu_one5,fu_pic5)

  	//服装下的小图标拼接
  	var biao="";
  	var chang=document.getElementById("chang")
  	var zifuc=["images/tubi (1).png",
  	"images/biao28.jpg",
  	"images/biao29.jpg",
  	"images/biao27.jpg",
  	"images/tubi (5).jpg",
  	"images/tubi (6).jpg",
  	"images/biao23.jpg",
  	"images/biao21.jpg",
  	"images/tubi (9).jpg",
  	"images/tubi (10).jpg",
  	"images/tubi (11).jpg",
  	"images/biao22.jpg",
  	"images/tubi (13).jpg",
  	"images/tubi (14).jpg",
  	"images/tubi (15).jpg",
  	"images/biao21.jpg",
  	"images/biao26.jpg",
  	"images/tubi (18).jpg",
  	"images/biao27.jpg",
  	"images/tubi (20).jpg",
  	"images/tubi (1).png",
  	"images/biao28.jpg",
  	"images/biao29.jpg",
  	"images/biao27.jpg",
  	"images/tubi (5).jpg",
  	"images/tubi (6).jpg",
  	"images/biao23.jpg",
  	"images/biao21.jpg",
  	"images/tubi (9).jpg",
  	"images/tubi (10).jpg",]
  	zifuc.forEach(function(item,index){
  		biao+=`<li><a href=""><img src="${item}" alt=""></a></li>`
  	})
  	chang.innerHTML=biao;
  	var nudd=0;
  	
  	
  	$("#fu_xu .xiashu2").click(function(){
  		clearInterval(jian)
  		nudd--;
  		if(nudd==-1){
  			nudd=1;
  			$("#chang").css("left","-2400px")
  		}
        $("#chang").stop().animate({left:-1200*nudd},200)

  	})
  	$("#fu_xu .xiashu1").click(function(){
  		clearInterval(jian)
  		nudd--;
  		if(nudd==-1){
  			nudd=1;
  			$("#chang").css("left","-2400px")
  		}
        $("#chang").stop().animate({left:-1200*nudd},200)

  	})
  	var jian=null;
  	jian=setInterval(function(){
  		nudd--;
  		if(nudd==-1){
  			nudd=1;
  			$("#chang").css("left","-2400px")
  		}
        $("#chang").stop().animate({left:-1200*nudd},200)

  	},2000)
  	$("#chang").mouseenter(function(){
  		clearInterval(jian)
  	})
  	$("#chang").mouseleave(function(){
  		clearInterval(jian)
  		jian=setInterval(function(){
  		nudd--;
  		if(nudd==-1){
  			nudd=1;
  			$("#chang").css("left","-2400px")
  		}
        $("#chang").stop().animate({left:-1200*nudd},200)

  	},2000)
  	})



   	

// 日用百货拼接
    var  ss1="";
    var  ss2="";
    var huo1=document.getElementById("huo1")
    var huo3=document.getElementById("huo3")
    var hu1=[{im:"images/hh1.jpg",tit:""},
    	{im:"images/hh2.jpg",tit:"三只松鼠"},
    	{im:"images/hh3.jpg",tit:"小狗"},
    	{im:"images/hh4.jpg",tit:"华为旗舰店"}
    ]
    var hu2=[{im:"images/hh5.jpg",tit:"苏宁家电"},
    	{im:"images/hh6.jpg",tit:"苏泊尔"},
    	{im:"images/hh7.jpg",tit:"宠物用品"},
    	{im:"images/hh8.jpg",tit:"大家具精品推荐"}
    ]
    
   hu1.forEach(function(item,index){
    	ss1+=`<li ><a href="#" title="${item.tit}"><img src="${item.im}" alt=""></a></li>`
    })
    	huo1.innerHTML=ss1;
    hu2.forEach(function(item,index){
    	ss2+=`<li ><a href="#" title="${item.tit}"><img src="${item.im}" alt=""></a></li>`
    })
    	huo3.innerHTML=ss2;
    	

     
// 小图标拼接
    var ab="";
    var dat1=[
    	"images/or1.jpg","images/or2.png","images/or3.jpg","images/or4.png","images/or5.jpg","images/or6.jpg","images/or7.jpg","images/or8.jpg","images/or9.jpg","images/or1.jpg",
    ]
    
    dat1.forEach(function(item,index){
    	ab+=`<li><a href=""><img src="${item}" alt=""></a></li>`
    })

  	var pai=document.getElementById("pai")

  	pai.innerHTML=ab;


  	 

// 当当优品拼接
	var  one1="";
    var  two2="";
    var dang1=document.getElementById("dang1")
    var dang3=document.getElementById("dang3")
    var cha1=["images/dang1.jpg","images/dang2.jpg","images/dang3.jpg","images/dang4.jpg"
    ]
    var cha2=["images/dang5.jpg","images/dang6.jpg","images/dang7.jpg","images/dang8.jpg"
    ]
    
   cha1.forEach(function(item,index){
    	one1+=`<li ><a href="#" title=""><img src="${item}" alt=""></a></li>`
    })
    	dang1.innerHTML=one1;
    cha2.forEach(function(item,index){
    	two2+=`<li ><a href="#" title=""><img src="${item}" alt=""></a></li>`
    })
    	dang3.innerHTML=two2;

    	// 创意文具拼接
    var pict="";
    var si=document.getElementById("si")
    var wenju=["images/xie1.jpg","images/xie2.jpg","images/xie3.png","images/xie4.jpg","images/xie5.jpg",]	
    wenju.forEach(function(item,index){
    	pict+=`<li class="si2"><a href=""><img src="${item}" alt=""></a></li>`
    })	
  si.innerHTML=pict

  	//孕婴童拼接数据

  	var too1="";
  	var too2="";
  	var to1=document.getElementById("to1")
    var to3=document.getElementById("to3")
  	var topp=["images/ert3.jpg","images/ert4.jpg","images/ert5.jpg","images/ert6.jpg","images/ert7.jpg","images/ert8.jpg"]
  	var topp1=["images/ert1.jpg","images/ert2.jpg",]
  	topp.forEach(function(item,index){
  		too1+=`<li><a href="#"><img src="${item}" alt=""></a></li>`
  	})
  	to3.innerHTML=too1;
  	topp1.forEach(function(item,index){
  		too2+=`<li><a href="#"><img src="${item}" alt=""></a></li>`
  	})
  	to1.innerHTML=too2;


  	var ab1="";
    var dat11=[
    	"images/or7.jpg","images/or1.jpg","images/or3.jpg","images/or4.png","images/or5.jpg","images/or6.jpg","images/or2.png","images/or9.jpg","images/or8.jpg","images/or3.jpg",
    ]
    
    dat11.forEach(function(item,index){
    	ab1+=`<li><a href=""><img src="${item}" alt=""></a></li>`
    })

  	var pa1=document.getElementById("pa1")

  	pa1.innerHTML=ab1;

  	//为你推荐
  	var dastr="";
  	var datu=[
  	{im:"images/pa44.jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:56.43,jia2:13.2},{im:"images/pa41.jpg",title:"运营其实很简单&nbsp;互联网运营进阶之道" ,jia1:43,jia2:32},{im:"images/pa45.jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:34.4,jia2:32},{im:"images/pa41.jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:67.89,jia2:32.09},{im:"images/pa40.jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:93.65,jia2:32},{im:"images/pa46.jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa47.jpg",title:"月亮与六便士（新版！未删节插图珍藏版，荣获波比小说奖诗人译本" ,jia1:43,jia2:32},
  	{im:"images/pa43.jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa (16).jpg",title:"运营其实很简单&nbsp;互联网运营进阶之道" ,jia1:43,jia2:32},{im:"images/pa (12).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa45.jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa (17).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa (26).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa45.jpg",title:"月亮与六便士（新版！未删节插图珍藏版，荣获波比小说奖诗人译本" ,jia1:43,jia2:32},
  	{im:"images/pa48.jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa (16).jpg",title:"运营其实很简单&nbsp;互联网运营进阶之道" ,jia1:43,jia2:32},{im:"images/pa (21).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa41.jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa (19).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:23.67},{im:"images/pa (26).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:23.67},{im:"images/pa (13).jpg",title:"月亮与六便士（新版！未删节插图珍藏版，荣获波比小说奖诗人译本" ,jia1:43,jia2:23.67},
  	{im:"images/pa (14).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:79.54,jia2:23.67},{im:"images/pa (12).jpg",title:"运营其实很简单&nbsp;互联网运营进阶之道" ,jia1:79.54,jia2:23.67},{im:"images/pa (21).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:79.54,jia2:23.67},{im:"images/pa (27).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:79.54,jia2:32},{im:"images/pa (20).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:79.54,jia2:32},{im:"images/pa (23).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa (23).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43.4,jia2:32},
  	{im:"images/pa (21).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa (15).jpg",title:"运营其实很简单&nbsp;互联网运营进阶之道" ,jia1:43,jia2:32},{im:"images/pa46.jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa (28).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa47.jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:32.40,jia2:10.2},{im:"images/pa (31).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa49.jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},
  	{im:"images/pa (21).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa (14).jpg",title:"运营其实很简单&nbsp;互联网运营进阶之道" ,jia1:43,jia2:32},{im:"images/pa44.jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa (29).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa (15).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:100.24,jia2:32},{im:"images/pa48.jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa (13).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:143.3,jia2:32},
  	{im:"images/pa (25).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa42.jpg",title:"运营其实很简单&nbsp;互联网运营进阶之道" ,jia1:43,jia2:32},{im:"images/pa42.jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa (25).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa (12).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:65.54,jia2:32},{im:"images/pa (29).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:65.54,jia2:32},{im:"images/pa (27).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:65.54,jia2:32},
  	{im:"images/pa (26).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:65.54,jia2:32},{im:"images/pa (18).jpg",title:"运营其实很简单&nbsp;互联网运营进阶之道" ,jia1:43,jia2:32},{im:"images/pa43.jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa49.jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa (16).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa (25).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa (30).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},
  	{im:"images/pa (27).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa (15).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa (12).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32},{im:"images/pa (19).jpg",title:"人间失格（日本小说家太宰治的自传体小说）" ,jia1:43,jia2:32}
  	

  	]
  	datu.forEach(function(item,index){
  		dastr+=`<li><a href="#" class="tus"><img src="${item.im}" alt=""></a><p class="pname"><a href="" title="${item.title}">${item.title}</a></p>
<p class="price">¥<span class="pr1">${item.jia1}</span><span class="pr2">电子书¥${item.jia2}</span></p></li>`
  	})

  	var shuname=document.getElementById("shuname")
  	shuname.innerHTML=dastr;



//楼梯
   $(window).scroll(function(){
   	if($(document).scrollTop()>200&&$(document).scrollTop()<6790){
   		$("#louti").fadeIn()
   	}else{
   		$("#louti").fadeOut()
   	}
   })

   $("#louti .fix_list .ff1").mouseenter(function(){
   	    $(this).css({backgroundColor: "#93d46f"})
   	    $(this).children().children().css({backgroundPosition:"-49px -11px"})
   })
   $("#louti .fix_list .ff1").mouseleave(function(){
   	    $(this).css({backgroundColor: "#f7f7f7"})
   	    $(this).children().children().css({backgroundPosition:"-9px -11px"})
   })
    $("#louti .fix_list .ff2").mouseenter(function(){
   	    $(this).css({backgroundColor: "#f97f67"})
   	    $(this).children().children().css({backgroundPosition:"-49px -494px"})
   })
    $("#louti .fix_list .ff2").mouseleave(function(){
   	    $(this).css({backgroundColor: "#f7f7f7"})
   	    $(this).children().children().css({backgroundPosition:"-8px -494px"})
   })
     $("#louti .fix_list .ff3").mouseenter(function(){
   	    $(this).css({backgroundColor: "#72d599"})
   	    $(this).children().children().css({backgroundPosition:"-48px -532px"})
   })
     $("#louti .fix_list .ff3").mouseleave(function(){
   	    $(this).css({backgroundColor: "#f7f7f7"})
   	    $(this).children().children().css({backgroundPosition:"-8px -532px"})
   })
      $("#louti .fix_list .ff4").mouseenter(function(){
   	    $(this).css({backgroundColor: "#ff857f"})
   	    $(this).children().children().css({backgroundPosition:"-49px -251px"})
   })
      $("#louti .fix_list .ff4").mouseleave(function(){
   	    $(this).css({backgroundColor: "#f7f7f7"})
   	    $(this).children().children().css({backgroundPosition:"-10px -251px"})
   })
       $("#louti .fix_list .ff5").mouseenter(function(){
   	    $(this).css({backgroundColor: " #f97f67"})
   	    $(this).children().children().css({backgroundPosition:"-50px -572px"})
   })
       $("#louti .fix_list .ff5").mouseleave(function(){
   	    $(this).css({backgroundColor: "#f7f7f7"})
   	    $(this).children().children().css({backgroundPosition:"-10px -572px"})
   })

     $(window).scroll(function(){
   
   	if($(document).scrollTop()>1400&&$(document).scrollTop()<1985){
   		$("#louti .fix_list .ff1").css({backgroundColor: "#93d46f",})
   		$("#louti .fix_list .ff1 .book").css({backgroundPosition:"-49px -11px"})
   	}else{
   		$("#louti .fix_list .ff1").css({backgroundColor: "#f7f7f7",})
   		$("#louti .fix_list .ff1 .book").css({backgroundPosition:"-9px -11px"})
   	}
   })

      $(window).scroll(function(){
   	
   	if($(document).scrollTop()>1985&&$(document).scrollTop()<2628){
   		$("#louti .fix_list .ff2").css({backgroundColor: "#f97f67",})
   		$("#louti .fix_list .ff2 .shirt").css({backgroundPosition:"-49px -494px"})
   	}else{
   		$("#louti .fix_list .ff2").css({backgroundColor: "#f7f7f7",})
   		$("#louti .fix_list .ff2 .shirt").css({backgroundPosition:"-8px -494px"})
   	}
   })

       $(window).scroll(function(){
   	
   	if($(document).scrollTop()>2628&&$(document).scrollTop()<3640){
   		$("#louti .fix_list .ff3").css({backgroundColor: "#72d599",})
   		$("#louti .fix_list .ff3 .ri").css({backgroundPosition:"-48px -532px"})
   	}else{
   		$("#louti .fix_list .ff3").css({backgroundColor: "#f7f7f7",})
   		$("#louti .fix_list .ff3 .ri").css({backgroundPosition:"-8px -532px"})
   	}
   })

      $(window).scroll(function(){
   	
   	if($(document).scrollTop()>3640&&$(document).scrollTop()<4115){
   		$("#louti .fix_list .ff4").css({backgroundColor: "#ff857f",})
   		$("#louti .fix_list .ff4 .ert").css({backgroundPosition:"-49px -251px"})
   	}else{
   		$("#louti .fix_list .ff4").css({backgroundColor: "#f7f7f7",})
   		$("#louti .fix_list .ff4 .ert").css({backgroundPosition:"-10px -251px"})
   	}
   })

         $(window).scroll(function(){
   	
   	if($(document).scrollTop()>4115&&$(document).scrollTop()<6749){
   		$("#louti .fix_list .ff5").css({backgroundColor: "#f97f67",})
   		$("#louti .fix_list .ff5 .cai").css({backgroundPosition:"-50px -572px"})
   	}else{
   		$("#louti .fix_list .ff5").css({backgroundColor: "#f7f7f7",})
   		$("#louti .fix_list .ff5 .cai").css({backgroundPosition:"-10px -572px"})
   	}
   })



    $(".weww1").mouseenter(function(){
    	$(".weww1 .tu12").css("backgroundImages","url(../images/sidebar.png) no-repeat -40px -175px;")
    	$(".huidd").css({right:"34px",display:"block"})
    

    })
      $(".weww1").mouseleave(function(){
    	$(".weww1 .tu12").css("backgroundImages","url(../images/sidebar.png) no-repeat 0 -175px;")
    	$(".huidd").css({display:"none"})
    

    })
      $(".weww1").get(0).onclick=function(){
      	var timer0=setInterval(function(){
      	  document.body.scrollTop-=300;
      	 if( document.body.scrollTop<=0){
      	 	clearInterval(timer0)
      	 	 document.body.scrollTop=0;
      	 }
      },30)
      }

      $(".weww").mouseenter(function(){
      	$(".saner").css("display","block")
      })
      $(".weww").mouseleave(function(){
      	$(".saner").css("display","none")
      })
      
     


































 })
		
