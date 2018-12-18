$(function(){
	$(".wu").click(function(){
		return false
	})
	$(".wu1").click(function(){
		return false
	})

   $(".wu").click(function(){
     $("#yan").css("display","none").siblings("#huan").css("display","block")
    shi()

  })
   $(".wu1").click(function(){
    clearInterval(timer)
   $(".shui1").css("display","none")
     $("#huan").css("display","none").siblings("#yan").css("display","block")


  })

       $("#sao").mouseenter(function(){
        $(this).finish().animate({left:"24px"},300)
        if($("#sao").get(0).offsetLeft>23){

          $("#tell").stop().fadeIn()
        }
      
    })

       $("#sao").mouseleave(function(){
        $(this).finish().animate({left:"97px"},300)
        if($("#sao").get(0).offsetLeft<97){

          $("#tell").hide()
        }
      
      
    })
       var timer=null;
       function shi(){
       timer=setTimeout(function(){
       $(".shui1").css("display","block")
       },20000)
       $(".diji").click(function(){
        $(".shui1").css("display","none")
       })
 }
  
  var flag=0;
  $("#geng a").click(function(){
    flag++;
    if(flag==1){
      $("#geng .fang").css("display","block")
    $("#geng .shang").css("display","none")
     $("#geng ul").css("display","block")
     
    }else if(flag==2){
      $("#geng .fang").css("display","none")
     $("#geng .shang").css("display","block")
     $("#geng ul").css("display","none")
     flag=0;
    }
    return false
  })
 var sum1=0;
  $("#chec").click(function(){
    sum1++;
    console.log(sum1)
    if(sum1==1){
      $("#sel .qie").text("七天内自动登录")
    }else if(sum1==2){
      $("#sel .qie").text("请勿在公用电脑上勾选此项")
      sum1=0;
    }
    

  })
    

   $(".place").click(function(){
      $(this).css("display","none")
      $(".ruq").css("display","block")
      $("#txt").css({border:"1px solid #969696"}).focus()
})
   $("#txt").blur(function(){
     $(".ruq").css("display","none")
     $(".place").css("display","block")
     $(this).css({border:"1px solid #e6e6e6"})
     if($("#txt").val()!=""){
         $(".place").css("display","none")
       }
   })
   

   $("#txt").keyup(function(){
       $(".chadiao").css("display","block")
       if($("#txt").val()==""){
         $(".chadiao").css("display","none")
       } 
 })


   $(".chadiao").click(function(){
      $(this).css("display","none")
      $("#txt").val("")
       $(".place").css("display","block")
   })


   $(".holder").click(function(){
      $(this).css("display","none")
      $(".ruo").css("display","block")
      $("#ma").css({border:"1px solid #969696"}).focus()
})
   $("#ma").blur(function(){
     $(".ruo").css("display","none")
     $(".holder").css("display","block")
     $(this).css({border:"1px solid #e6e6e6"})
     if($("#ma").val()!=""){
         $(".holder").css("display","none")
       }
   })
   
var boxx1=document.getElementsByClassName("boxx1")
   var box22s=document.getElementsByClassName("box22")
   box22s[0].onclick=function(){
    

     this.style.backgroundPosition=-76+"px" + -76+"px"
   }
  




















})