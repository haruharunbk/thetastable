/* main.js */

var $devWidth;
var $limitsize = 1024;

$(document).ready(function(){
	if($devWidth < $limitsize){
		$("section").css({"overflow":"visible","height":"initial"});
	}
	
	
	
	// 브라우저 높이값을 div 높이값으로 설정
	var ht = $(window).height();
	$("#container > div").height(ht);

	$(window).resize(function(){
		var ht = $(window).height();
		//$("section").height(ht);
		$("#container > div").height(ht);
		$(".main_visual video").height(ht);
		//$("#section1 > ul > li").height(ht);
	});

	//윈도우가 시작하면 화면 맨위로 이동
	$("html,body").stop().animate({"scrollTop":0},1000,"swing");
	


	// container
	//$("section").height(ht);
	$(".main_visual video").height(ht);
	//$("#section1 > ul > li").height(ht);


	var start = setTimeout(function(){
		$(".main_visual").addClass("on"); //처음 시작할때 content1에 class on붙여줘
	},500);
	
	// 윈도우에서 스크롤이 움직일 때 
	// 현재 스크롤 값을 가져온다
	$(window).scroll(function(){
		//if($devWidth < $limitsize) return false;
		var scroll = $(this).scrollTop(); //현재scroll 위치값
		var ht = $(window).height();

		if(scroll >= 0 * ht && scroll < 1 * ht){
			$("#wrap").removeClass('black');
			$("#container > div > section").removeClass("on");
			$("#container > div").eq(0).children("section").addClass("on");
			$(".scroll").css("display","block");
			$(".footnav ul li").removeClass("on");
			$(".footnav ul li").removeClass("white");
			$(".footnav ul li").eq(0).addClass("white");
			$(".b_txt").removeClass("active");
			$(".b_txt").addClass("active");
		}
		if(scroll >= 1 * ht && scroll < 2 * ht){
			$("#wrap").removeClass('black');
			$("#container > div > section").removeClass("on");
			$("#container > div").eq(1).children("section").addClass("on");
			$("#contain > section").find(".b_txt").removeClass("active");
			$("#contain > section").eq(1).find(".b_txt").addClass("active");
			$(".scroll").css("display","block");
			$(".footnav ul li").removeClass("on");
			$(".footnav ul li").removeClass("white");
			$(".footnav ul li").eq(1).addClass("white");
			$(".b_txt").removeClass("active");
			$(".b_txt").addClass("active");
		}
		if(scroll >= 2 * ht && scroll < 3 * ht){
			$("#wrap").addClass('black');
			$("#container > div > section").removeClass("on");
			$("#container > div").eq(2).children("section").addClass("on");
			$("#contain > section").find(".b_txt").removeClass("active");
			$("#contain > section").eq(2).find(".b_txt").addClass("active");
			$(".footnav ul li").removeClass("on");
			$(".footnav ul li").removeClass("white");
			$(".footnav ul li").eq(2).addClass("on");
			$(".b_txt").removeClass("active");
			$(".b_txt").addClass("active");
		}
		if(scroll >= 3 * ht && scroll < 4 * ht){
			$("#wrap").addClass('black');
			$("#container > div > section").removeClass("on");
			$("#container > div").eq(3).children("section").addClass("on");
			$("#contain > section").find(".b_txt").removeClass("active");
			$("#contain > section").eq(3).find(".b_txt").addClass("active");
			$(".scroll").css("display","block");
			$(".footnav ul li").removeClass("on");
			$(".footnav ul li").removeClass("white");
			$(".footnav ul li").eq(3).addClass("on");
			$(".b_txt").removeClass("active");
			$(".b_txt").addClass("active");
		}
		if(scroll >= 4 * ht && scroll < 5 * ht - 228){
			$("#wrap").addClass('black');
			$("#container > div > section").removeClass("on");
			$("#container > div").eq(4).children("section").addClass("on");
			$("#contain > section").find(".b_txt").removeClass("active");
			$("#contain > section").eq(4).find(".b_txt").addClass("active");
			$(".scroll").css("display","none");
			$(".footnav ul li").removeClass("on");
			$(".footnav ul li").removeClass("white");
			$(".footnav ul li").eq(4).addClass("on");
			$(".b_txt").removeClass("active");
			$(".b_txt").addClass("active");
		}
		if(scroll >= 4 * ht + 228){
			$(".footnav ul li").removeClass("on");
		}
	}); //scroll


	

	//바로가기 버튼 클릭
	$(".footnav ul li").click(function(){
		var thisIdx = $(this).index();
		$(".footnav ul li").removeClass('on');
		$(this).addClass('on');
		$("html,body").stop().animate({"scrollTop":thisIdx * ht},1500,"swing");
	});


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* 주메뉴 */
	// a에 마우스 올려놓으면 height값 늘어나야 되고 하위 ul은 diplay block으로 바꿔줘야하고
	// header_wrap 은 에니메이트로 한다
	$(".gnb > ul > li > a").bind("mouseover focus",function(){
		if($devWidth < $limitsize) return false;
		$(".header_wrap").stop().animate({"height":"420px"},500,"linear");
		$(".gnb > ul > li > ul").css("display","block");
		$(".header_wrap").addClass("over");
		$("#header").addClass("over");
		$(".gnb > ul > li").removeClass("on");
		$(this).parent().addClass("on");
		$(".scrh_box").addClass("on");
		
	});

	$("#header").bind("mouseleave blur",function(){
		if($devWidth < $limitsize) return false;
		$(".header_wrap").stop().animate({"height":"100px"},300,"linear");
		$(".gnb > ul > li > ul").css("display","none");
		$(".header_wrap").removeClass("over");
		$("#header").removeClass("over");
		$(".gnb > ul > li").removeClass("on");
		$(".scrh_box").removeClass("on");
	});

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	$(".aside .family .box > a").bind("mouseover focus",function(){
		$(".aside .family").addClass("on");

	});
	$(".aside .family").bind("mouseleave blur",function(){
		$(".aside .family").removeClass("on");
	});

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* 햅버거 버튼 클릭*/
	// 햄버거 버튼을 누르면 바깥에 있다가 안으로 들어오고 닫기버튼도 스르르
	$(".allmenu").click(function(){
		$(this).toggleClass("on");
		
		if( $(this).hasClass("on") ){
			$(".allmenu_box").addClass("on");
			$("#header").addClass("ov");
			$(".scrh_box").addClass("ov");
			$(".aside").addClass("on");
		}else{
			$(".allmenu_box").removeClass("on");
			$("#header").removeClass("ov");
			$(".scrh_box").removeClass("ov");
			$(".aside").removeClass("on");
		}
	});

	var a = true;
	$(".allmenu_box .snb > ul > li > a").click(function(){
		if(a){
			$(".allmenu_box .snb > ul > li").removeClass("on");
			$(this).parent().addClass("on");
			$(".allmenu_box .snb > ul > li > ul").css("display","none");
			$(this).next().css("display","block");
			$(this).parent().addClass("hover");
			a = false;
		}else{
			$(this).parent().removeClass("hover");
			$(this).next().css("display","none");
			a = true;
		}
	});

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* top */
	$(".btn_top").bind("click focus",function(){
		$("html,body").stop().animate({"scrollTop":0},1400,"swing");
	});


	// 한페이지씩 이동
	$("#container > div").mousewheel(function(event ,delta){
		if(delta >= 0) { //마우스 휠을 올렸을 때
			if($devWidth < $limitsize) return false;
			var prev = $(this).prev().offset().top;
			$("html,body").stop().animate({"scrollTop":prev},1400,"linear"); 
			
		}else if(delta < 0) { //마우스 휠을 내렸을 때
			if($devWidth < $limitsize) return false;
			var next = $(this).next().offset().top;
			$("html,body").stop().animate({"scrollTop":next},1400,"linear"); 
		}
	});//mousewheel

	console.log($("#section0").offset().top);
	console.log($("#section1").offset().top);
	console.log($("#section2").offset().top);
	console.log($("#section3").offset().top);
	console.log($("#section4").offset().top);
	console.log($("#section5").offset().top);

});