$(function(){
	//最上，固定定位，悬浮标题改变内容
	$("#header .title").hover(function(){
		$(this).find(".name").html("Web");
		$(this).find(".web").html("前端工程师");
	},function(){
		$(this).find(".name").html("刘玄清");
		$(this).find(".web").html("个人简历");
	});
	//全屏滚动
	$("#content").fullpage({
		sectionsColor: ['#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2'],
		'navigation': true,
		"afterLoad":function(anchorLink, index){
			if(index == 2){
				$(".section2 .title .line").animate({
					width:200
				},1000,function(){
					$(".section2 .title .me").css("display","inline-block");
				});
				$(".section2 .info").animate({
					left:0
				},1000,function(){
					$(".section2 .font .a").animate({
						left:0
					},1000);
					$(".section2 .font .b").animate({
						right:0
					},1000)
				})
			}
			if(index == 3){
				$(".section3 .title .line").animate({
					width:200
				},1000,function(){
					$(".section3 .title .me").css("display","inline-block");
				})
			}
		},
		"onLeave":function(index, direction){
			if(index == '2'){
				$(".section2 .title .line").css("width","0");
				$(".section2 .title .me").css("display","none");
				
			}
		}
	});
	//第一屏
	$(".section1 .img_font .box").animate({
		top:0
	},1000,function(){
		$(".section1 .font").css("opacity",1);
		$("#content .section1 .line span").animate({
			width:700
		},1000,function(){
			$(".section1 .info").find(".one").animate({
				opacity:1
			},function(){
				$(".section1 .info").find(".two").animate({
					opacity:1
				},function(){
					$(".section1 .info").find(".three").animate({
						opacity:1
					},function(){
						$(".section1 .info").find(".four").animate({
							opacity:1
						})
					})
				})
			})
		})
	})
	//专业技能
	$(".section3 .info .box span.sigle").hover(function(){
		$(this).css("transform","scale(1.2)");
		console.log("s");
	},function(){
		$(this).css("transform","scale(1)");
	})
});


